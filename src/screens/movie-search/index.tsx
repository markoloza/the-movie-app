import React, { useEffect, useMemo } from "react";
import { FlatList } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import {
  getPopularMovies,
  getSearchedMovies,
  incrementPage,
  searchMovieWithQuery,
  clearSearch,
} from "../../redux/moviesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MaterialIcons } from "@expo/vector-icons";
import debounce from "lodash/debounce";

import { CardContainer, CardImage } from "../../components/card";
import Container from "../../components/containers/Container";
import DefaultLoader from "../../components/loaders/DefaultLoader";
import IconButton from "../../components/buttons/IconButton";
import { SearchInputContainer, SearchInput } from "../../components/search";
import { TitleText } from "../../components/text";

export interface Activity {
  id: number;
}
interface MovieSearchProps {
  item: {
    [id: string]: Activity;
  };
  navigation?: NavigationStackProp<{ navigation: any }>;
}

const MovieCard = (props: MovieSearchProps) => {
  let posterPath = `https://image.tmdb.org/t/p/original/${props.item.poster_path}`;
  return (
    <CardContainer
      onPress={() =>
        props.navigation.navigate("MovieDetails", {
          id: props.item.id,
        })
      }
    >
      <CardImage source={posterPath} />
    </CardContainer>
  );
};

////////////////////////////////////////////////////////////////////////////////////////////////
const MovieSearchInput = ({}) => {
  const dispatch = useAppDispatch();
  const { searchQuery, page } = useAppSelector((state) => state.movies);

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
    <SearchInputContainer isFocused={true}>
      <MaterialIcons name="search" size={26} color="#0B253F" />
      <SearchInput
        onChangeText={debouncedChangeHandler}
        onPressIn={() => console.warn("PRESSED")}
        // value={query}
        placeholder="Search"
      ></SearchInput>
      <IconButton icon="close" />
    </SearchInputContainer>
  );
};

const MovieSearch = ({ navigation }: MovieSearchProps) => {
  const dispatch = useAppDispatch();
  const { popularMovies, page, searchedMovies, loading } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(getPopularMovies(page));
  }, [page]);

  return (
    <Container>
      <MovieSearchInput />
      <FlatList
        ListFooterComponent={loading && <DefaultLoader />}
        ListHeaderComponent={() => <TitleText>What’s popular</TitleText>}
        showsHorizontalScrollIndicator={true}
        data={searchedMovies}
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
