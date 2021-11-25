import { getPopularMovies } from "../redux/moviesSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const usePopularMovies = () => {
  const dispatch = useAppDispatch();
  const { popularMovies, page } = useAppSelector((state) => state.movies);

  const fetchMoreMovies = async () => {
    dispatch(getPopularMovies(page));
  };

  return [popularMovies, fetchMoreMovies];
};

export default usePopularMovies;
