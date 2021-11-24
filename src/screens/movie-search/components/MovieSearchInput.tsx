import React, { useEffect, useMemo } from "react";
import {
  clearSearch,
  clearSearchedMovies,
  getSearchedMovies,
  setSearchQuery,
  switchSearchMode,
} from "../../../redux/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { SearchInputContainer, SearchInput } from "../../../components/search";
import IconButton from "../../../components/buttons/IconButton";
import { MaterialIcons } from "@expo/vector-icons";

import debounce from "lodash/debounce";
import { Keyboard } from "react-native";

const MovieSearchInput = () => {
  const dispatch = useAppDispatch();
  const { searchQuery, searchedMoviesPage, searchMode } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    if (searchQuery.length > 2) {
      dispatch(clearSearchedMovies());
      dispatch(getSearchedMovies({ searchQuery, searchedMoviesPage: 1 }));
    } else {
      dispatch(clearSearchedMovies());
    }
  }, [searchQuery]);

  const changeHandler = (event: any) => {
    dispatch(setSearchQuery(event));
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 500),
    []
  );

  return (
    <SearchInputContainer
      onPress={() => {
        dispatch(switchSearchMode(false));
        Keyboard.dismiss();
      }}
      isFocused={searchMode}
    >
      <MaterialIcons name="search" size={26} color="#0B253F" />
      <SearchInput
        value={searchQuery}
        onChangeText={debouncedChangeHandler}
        onFocus={() => {
          !searchMode && dispatch(switchSearchMode(true));
        }}
        placeholder="Search"
      ></SearchInput>
      <>
        {searchMode && (
          <IconButton onPress={() => dispatch(clearSearch())} icon="close" />
        )}
      </>
    </SearchInputContainer>
  );
};

export default MovieSearchInput;
