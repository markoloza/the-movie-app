import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { CardContainer, CardImage } from "../../components/card";
import Container from "../../components/containers/Container";
import SearchInput from "../../components/search/SearchInput";

const mocData = [
  { label: "A", id: "ff" },
  { label: "B", id: "fc" },
  { label: "C", id: "fe" },
  { label: "D", id: "fg" },
  { label: "E", id: "fj" },
  { label: "A", id: "ff" },
  { label: "B", id: "fc" },
  { label: "C", id: "fe" },
];

interface Props {
  navigation?: NavigationStackProp<{ navigation: any }>;
}

const MovieCard = (props: Props) => {
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

const MovieSearch = (props: { navigation: any }) => {
  return (
    <Container>
      <SearchInput></SearchInput>
      <FlatList
        data={mocData}
        renderItem={() => <MovieCard navigation={props.navigation} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </Container>
  );
};

export default MovieSearch;

const styles = StyleSheet.create({});
