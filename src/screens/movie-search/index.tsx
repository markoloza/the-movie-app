import React, { useEffect, useMemo } from "react";
import { FlatList } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { getPopularMovies, incrementPage } from "../../redux/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import Container from "../../components/containers/Container";
import DefaultLoader from "../../components/loaders/DefaultLoader";

import { TitleText, BodyText } from "../../components/text";
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
  const dispatch = useAppDispatch();
  const {
    popularMovies,
    page,
    searchedMovies,
    loading,
    searchMode,
  } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies(page));
  }, [page]);

  return (
    <Container>
      <MovieSearchInput />
      {searchMode ? (
        <BodyText>{`Showing ${searchedMovies.length} results`}</BodyText>
      ) : (
        <TitleText>What’s popular</TitleText>
      )}
      <FlatList
        ListFooterComponent={(): any => loading && <DefaultLoader />}
        showsHorizontalScrollIndicator={true}
        data={searchMode ? searchedMovies : popularMovies}
        renderItem={(item) => (
          <MovieCard navigation={navigation} item={item.item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0}
        onEndReached={() => {
          dispatch(incrementPage());
        }}
        numColumns={3}
        maxToRenderPerBatch={25}
      />
    </Container>
  );
};

export default MovieSearch;
