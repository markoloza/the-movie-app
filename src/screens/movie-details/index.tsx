import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { TitleText, BodyText } from "../../components/text";

import { primary } from "../../styles/colors";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { incremented, decremented } from "../../redux/counterSlice";

import HeroBackground from "../../components/hero/HeroBackground";
import Container from "../../components/containers/Container";
import DefaultLoader from "../../components/loaders/DefaultLoader";

interface Props {
  route: any;
}

const CastSection = (props: { cast: any[] }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
      }}
    >
      {props.cast.map((item, index) => {
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

const MovieDetails = (props: Props) => {
  const { id } = props.route.params;

  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovie();
  }, [id]);

  const filterMainCastAndDirector = (data: { cast: any; crew: any }) => {
    const allCastAndCrew = [...data.cast, ...data.crew];

    // const filterdCastAndCrew = allCastAndCrew.filter((item) => {
    //   return item.known_for_department === "Directing";
    // });
    setCast(allCastAndCrew);
  };

  const getMovie = async () => {
    try {
      const [firstResponse, secondResponse] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=55f30e0022207ec3098725b3214a5a92&language=en-US`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=55f30e0022207ec3098725b3214a5a92&language=en-US`
        ),
      ]);

      setMovieDetails(firstResponse.data);
      filterMainCastAndDirector(secondResponse.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let coverImage = `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`;

  if (loading) {
    return <DefaultLoader />;
  }
  return (
    <ScrollView>
      <HeroBackground source={coverImage}>
        <View style={styles.heroOverlay}>
          <TitleText style={styles.overlayText}>{movieDetails.title}</TitleText>
          <BodyText style={styles.overlayText}>
            {new Date(movieDetails.release_date).toLocaleDateString()}
          </BodyText>
          <View style={{ flexDirection: "row" }}>
            {movieDetails.genres.map((item: { name: string }, index: any) => {
              return (
                <BodyText key={index.toString()} style={styles.overlayText}>
                  {item.name + "  "}
                </BodyText>
              );
            })}
          </View>
        </View>
      </HeroBackground>
      <Container>
        <TitleText>Overview</TitleText>
        <BodyText>{movieDetails.overview}</BodyText>
        <CastSection cast={cast} />
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
});
