import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieDetailsSliceTypes } from "./types";

const API_KEY = "55f30e0022207ec3098725b3214a5a92";

export const getMovie = createAsyncThunk(
  "movies/getMovie",
  async (id: number) => {
    const [firstResponse, secondResponse] = await Promise.all([
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      ),
    ]);
    return { movieDetails: firstResponse.data, cast: secondResponse.data };
  }
);

const initialState: MovieDetailsSliceTypes = {
  loading: true,
  page: 1,
  details: {},
};

const movieDetailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovie.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.details = { ...action.payload };
      state.loading = false;
    });
    builder.addCase(getMovie.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const {} = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
