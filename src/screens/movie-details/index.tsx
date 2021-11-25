import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { TitleText, BodyText } from "../../components/text";
import { primary } from "../../styles/colors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getMovie } from "../../redux/movieDetailsSlice";

import HeroBackground from "../../components/hero/HeroBackground";
import Container from "../../components/containers/Container";
import DefaultLoader from "../../components/loaders/DefaultLoader";
import CastSection from "./components/CastSection";
import { RouteProp } from "@react-navigation/native";

interface MovieDetailsProps {
  route: RouteProp<{ params: { id: number } }, "params">;
}

const MovieDetails = ({ route }: MovieDetailsProps) => {
  const dispatch = useAppDispatch();
  const { details, loading } = useAppSelector((state) => state.movieDetails);

  const { id } = route.params;

  useEffect(() => {
    dispatch(getMovie(id));
  }, []);

  if (loading) {
    return <DefaultLoader />;
  }

  let coverImage = `https://image.tmdb.org/t/p/original/${details.movieDetails.poster_path}`;

  return (
    <ScrollView>
      <HeroBackground source={coverImage}>
        <View style={styles.heroOverlay}>
          <TitleText style={styles.overlayText}>
            {details.movieDetails.title}
          </TitleText>
          <BodyText style={styles.overlayText}>
            {new Date(details.movieDetails.release_date).toLocaleDateString()}
          </BodyText>
          <View style={styles.category}>
            {details.movieDetails.genres.map(
              (item: { name: string }, index: any) => {
                return (
                  <BodyText key={index.toString()} style={styles.overlayText}>
                    {item.name + "  "}
                  </BodyText>
                );
              }
            )}
          </View>
        </View>
      </HeroBackground>
      <Container>
        <TitleText>Overview</TitleText>
        <BodyText>{details.movieDetails.overview}</BodyText>
        <CastSection cast={details.cast.cast} />
      </Container>
    </ScrollView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  heroOverlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  category: { flexDirection: "row" },
  overlayText: {
    color: primary.fontColorLight,
  },
});
