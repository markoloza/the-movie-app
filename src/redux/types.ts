export type TodoId = string;

export type MoviesSliceTypes = {
  popularMovies: {}[];
  searchQuery: string;
  searchedMovies: {}[];
  searchMode: boolean;
  page: number;
  loading: boolean;
  movieDetails?: {};
};
