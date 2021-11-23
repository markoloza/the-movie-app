import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { MoviesSliceTypes } from "./types";
import axios from "axios";

const API_KEY = "55f30e0022207ec3098725b3214a5a92";

export const getPopularMovies = createAsyncThunk(
  "movies/getPopularMovies",
  async (page: number) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.data.results;
  }
);

export const getSearchedMovies = createAsyncThunk(
  "movies/getSearchedMovies",
  async ({ searchQuery, page }: { searchQuery: string; page: number }) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
    );
    return response.data.results;
  }
);

const initialState: MoviesSliceTypes = {
  popularMovies: [],
  searchQuery: "",
  searchedMovies: [],
  searchMode: false,
  loading: true,
  page: 1,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    searchMovieWithQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSearch: (state) => {
      state.searchedMovies = [];
      state.searchQuery = "";
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    switchSearchMode: (state, action) => {
      state.searchMode = action.payload;
      state.searchQuery = "";
    },
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(getPopularMovies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      state.popularMovies = [...state.popularMovies, ...action.payload];
      state.loading = false;
    });
    builder.addCase(getPopularMovies.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getSearchedMovies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getSearchedMovies.fulfilled, (state, action) => {
      state.searchedMovies = [...state.searchedMovies, ...action.payload];
      state.loading = false;
    });
    builder.addCase(getSearchedMovies.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {
  incrementPage,
  searchMovieWithQuery,
  clearSearch,
  switchSearchMode,
} = movieSlice.actions;
export default movieSlice.reducer;
