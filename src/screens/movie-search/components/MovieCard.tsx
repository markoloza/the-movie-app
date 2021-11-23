import React from "react";
import { CardContainer, CardImage } from "../../../components/card";
import { NavigationStackProp } from "react-navigation-stack";

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

export default MovieCard;
