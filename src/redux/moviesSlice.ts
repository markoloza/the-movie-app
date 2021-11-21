import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface MovieState {
  value: [];
}

const intialState: MovieState = {
  value: [],
};

interface ThunkAPI {
  dispatch: Function;
  getState: Function;
  extra?: any;
  requestId: string;
  signal: AbortSignal;
}

const API_KEY = "55f30e0022207ec3098725b3214a5a92";
const PAGE = 1;

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.data.results as MovieState;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: { entities: [], loading: "idle" },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  },
});

// Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123))

export const {} = movieSlice.actions;
export default movieSlice.reducer;
