import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieDetailsSliceTypes } from "./types";
import { api, API_KEY } from "../services/api";

export const getMovie = createAsyncThunk(
  "movies/getMovie",
  async (id: number) => {
    const [firstResponse, secondResponse] = await Promise.all([
      api.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      ),
      api.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      ),
    ]);
    return { movieDetails: firstResponse.data, cast: secondResponse.data };
  }
);

const initialState: MovieDetailsSliceTypes = {
  loading: true,
  details: {},
};

const movieDetailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.details = { ...action.payload };
      state.loading = false;
    });
    builder.addCase(getMovie.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {} = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
