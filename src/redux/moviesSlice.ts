import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MoviesSliceTypes } from "./types";
import { api, API_KEY } from "../services/api";

export const getPopularMovies = createAsyncThunk(
  "movies/getPopularMovies",
  async (page: number) => {
    const response = await api.get(
      `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.data;
  }
);

export const getSearchedMovies = createAsyncThunk(
  "movies/getSearchedMovies",
  async ({
    searchQuery,
    searchedMoviesPage,
  }: {
    searchQuery: string;
    searchedMoviesPage: number;
  }) => {
    const response = await api.get(
      `search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${searchedMoviesPage}&include_adult=false`
    );
    return response.data;
  }
);

const initialState: MoviesSliceTypes = {
  popularMovies: [],
  searchQuery: "",
  searchedMovies: [],
  searchMode: false,
  loading: true,
  page: 1,
  searchedMoviesPage: 1,
  totalPages: 0,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearch: (state) => {
      state.searchedMovies = [];
      state.searchedMoviesPage = 1;
      state.searchQuery = "";
    },
    clearSearchedMovies: (state) => {
      state.searchedMovies = [];
      state.searchedMoviesPage = 1;
    },
    incrementPage: (state, action) => {
      if (action.payload === "search") {
        state.searchedMoviesPage += 1;
      } else {
        state.page += 1;
      }
    },
    switchSearchMode: (state, action) => {
      state.searchMode = action.payload;
      state.searchedMoviesPage = 1;
      state.searchQuery = "";
      state.searchedMovies = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPopularMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      state.popularMovies = [...state.popularMovies, ...action.payload.results];
      state.loading = false;
    });
    builder.addCase(getPopularMovies.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getSearchedMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchedMovies.fulfilled, (state, action) => {
      state.searchedMovies = [
        ...state.searchedMovies,
        ...action.payload.results,
      ];
      state.totalPages = action.payload.total_pages;
      state.loading = false;
    });
    builder.addCase(getSearchedMovies.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {
  incrementPage,
  setSearchQuery,
  clearSearch,
  clearSearchedMovies,
  switchSearchMode,
} = movieSlice.actions;
export default movieSlice.reducer;
