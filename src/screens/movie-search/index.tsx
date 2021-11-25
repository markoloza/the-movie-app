import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import {
  getPopularMovies,
  incrementPage,
  getSearchedMovies,
} from "../../redux/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { TitleText, BodyText } from "../../components/text";
import Container from "../../components/containers/Container";
import DefaultLoader from "../../components/loaders/DefaultLoader";
import MovieSearchInput from "./components/MovieSearchInput";
import MovieCard from "./components/MovieCard";

export interface Activity {
  id: number;
}
interface MovieSearchProps {
  item: {
    [id: string]: Activity;
  };
  navigation?: NavigationStackProp<{ navigation: any }>;
}

const MovieSearch = ({ navigation }: MovieSearchProps) => {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = useState(true);
  const dispatch = useAppDispatch();
  const {
    popularMovies,
    searchedMovies,
    searchMode,
    searchQuery,
    loading,
    searchedMoviesPage,
    page,
    totalPages,
  } = useAppSelector((state) => state.movies);

  useEffect(() => {
    searchMode
      ? dispatch(getSearchedMovies({ searchQuery, searchedMoviesPage }))
      : dispatch(getPopularMovies(page));
  }, [page, searchedMoviesPage]);

  return (
    <Container>
      <MovieSearchInput />
      {searchMode ? (
        <BodyText>{`Showing ${searchedMovies.length} results`}</BodyText>
      ) : (
        <TitleText>What’s popular</TitleText>
      )}
      <FlatList
        numColumns={3}
        maxToRenderPerBatch={25}
        showsVerticalScrollIndicator={false}
        data={searchMode ? searchedMovies : popularMovies}
        renderItem={({ item }) => (
          <MovieCard navigation={navigation} item={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={(): any => loading && <DefaultLoader />}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => {
          setOnEndReachedCalledDuringMomentum(false);
        }}
        onEndReached={() => {
          if (!onEndReachedCalledDuringMomentum) {
            setOnEndReachedCalledDuringMomentum(true);
            if (searchedMoviesPage === totalPages) return;
            dispatch(incrementPage(searchMode ? "search" : "popular"));
          }
        }}
      />
    </Container>
  );
};

export default MovieSearch;
