import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { CardContainer, CardImage } from "../../components/card";
import { SearchInputContainer, SearchInput } from "../../components/search";
import IconButton from "../../components/buttons/IconButton";
import Container from "../../components/containers/Container";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";

const API_KEY = "55f30e0022207ec3098725b3214a5a92";
// https://api.themoviedb.org/3/movie/550?api_key=55f30e0022207ec3098725b3214a5a92

interface Props {
  item: any;
  navigation?: NavigationStackProp<{ navigation: any }>;
}

const MovieCard = (props: Props) => {
  console.warn(props);
  return (
    <CardContainer
      onPress={(item: { id: string }) =>
        props.navigation.navigate("MovieDetails", {
          id: item.id,
        })
      }
    >
      <CardImage />
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
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=55f30e0022207ec3098725b3214a5a92"
      )
      .then(function (response) {
        // handle success
        console.warn(response);
        setPopularMovies(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <Container>
      <MovieSearchInput />
      <FlatList
        data={popularMovies}
        renderItem={() => <MovieCard {...props} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </Container>
  );
};

export default MovieSearch;
