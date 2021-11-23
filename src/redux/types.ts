export type TodoId = string;

export type MoviesSliceTypes = {
  popularMovies: {}[];
  searchQuery: string;
  searchedMovies: {}[];
  page: number;
  loading: boolean;
  movieDetails?: {};
};
