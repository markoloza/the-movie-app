import React, { useEffect, useMemo } from "react";
import {
  searchMovieWithQuery,
  getSearchedMovies,
  clearSearch,
  switchSearchMode,
} from "../../../redux/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { SearchInputContainer, SearchInput } from "../../../components/search";
import IconButton from "../../../components/buttons/IconButton";
import { MaterialIcons } from "@expo/vector-icons";

import debounce from "lodash/debounce";

const MovieSearchInput = () => {
  const dispatch = useAppDispatch();
  const { searchQuery, page, searchMode } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    if (searchQuery.length > 2) {
      dispatch(getSearchedMovies({ searchQuery, page }));
    } else {
      dispatch(clearSearch());
    }
  }, [searchQuery, page]);

  const changeHandler = (event: any) => {
    dispatch(searchMovieWithQuery(event));
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 500),
    []
  );

  return (
    <SearchInputContainer
      onPress={() => dispatch(switchSearchMode(false))}
      isFocused={searchMode}
    >
      <MaterialIcons name="search" size={26} color="#0B253F" />
      <SearchInput
        value={searchQuery}
        onChangeText={debouncedChangeHandler}
        onPressIn={() => dispatch(switchSearchMode(true))}
        placeholder="Search"
      ></SearchInput>
      <IconButton onPress={() => dispatch(clearSearch())} icon="close" />
    </SearchInputContainer>
  );
};

export default MovieSearchInput;
