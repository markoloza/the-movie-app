export type MoviesSliceTypes = {
  popularMovies: {}[];
  searchQuery: string;
  searchedMovies: {}[];
  searchMode: boolean;
  page: number;
  searchedMoviesPage: number;
  totalPages: number;
  loading: boolean;
  movieDetails?: {};
};

export type MovieDetailsSliceTypes = {
  loading: boolean;
  page: number;
  details: any;
};
