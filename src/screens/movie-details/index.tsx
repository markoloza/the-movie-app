import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { TitleText, BodyText } from "../../components/text";
import { primary } from "../../styles/colors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getMovie } from "../../redux/movieDetailsSlice";

import HeroBackground from "../../components/hero/HeroBackground";
import Container from "../../components/containers/Container";
import DefaultLoader from "../../components/loaders/DefaultLoader";

interface MovieDetailsProps {
  route: any;
}

const CastSection = ({ cast }: { cast: any[] }) => {
  return (
    <View style={styles.castSectionContainer}>
      {cast.map((item, index) => {
        return (
          <View
            key={index.toString()}
            style={{
              width: (Dimensions.get("window").width - 30) / 3,
              marginBottom: 20,
              paddingHorizontal: 5,
            }}
          >
            <BodyText style={styles.textBold}>{item.original_name}</BodyText>
            <BodyText>{item.known_for_department}</BodyText>
          </View>
        );
      })}
    </View>
  );
};

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
          <View style={{ flexDirection: "row" }}>
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
  overlayText: {
    color: primary.fontColorLight,
  },
  textBold: {
    fontWeight: "bold",
  },
  castSectionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
});
