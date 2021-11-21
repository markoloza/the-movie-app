import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, FlatList } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { CardContainer, CardImage } from "../../components/card";
import { SearchInputContainer, SearchInput } from "../../components/search";
import IconButton from "../../components/buttons/IconButton";
import Container from "../../components/containers/Container";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import DefaultLoader from "../../components/loaders/DefaultLoader";

const API_KEY = "55f30e0022207ec3098725b3214a5a92";

interface Props {
  item: any;
  navigation?: NavigationStackProp<{ navigation: any }>;
}

const MovieCard = (props: Props) => {
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

const MovieSearchInput = () => {
  return (
    <SearchInputContainer isFocused={true}>
      <MaterialIcons name="search" size={26} color="#0B253F" />
      <SearchInput></SearchInput>
      <IconButton icon="close" />
    </SearchInputContainer>
  );
};

const MovieSearch = (props: { navigation: any }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, [page]);

  const getMovies = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then(function (response) {
        console.log(response);
        setPopularMovies([...popularMovies, ...response.data.results]);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  const loadMoreData = () => {
    setPage((prev) => prev + 1);
  };

  if (loading) {
    return <DefaultLoader />;
  }

  return (
    <Container>
      <MovieSearchInput />
      <FlatList
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        showsHorizontalScrollIndicator={true}
        data={popularMovies}
        renderItem={(item) => (
          <MovieCard navigation={props.navigation} item={item.item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          loadMoreData();
        }}
        numColumns={3}
      />
    </Container>
  );
};

export default MovieSearch;
