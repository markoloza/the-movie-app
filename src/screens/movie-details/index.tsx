import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeroBackground from "../../components/hero/HeroBackground";

interface Props {}

const MovieDetails = (props: Props) => {
  return (
    <View style={{ height: 300 }}>
      <HeroBackground>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "500",
              color: "#FFFFFF",
              marginBottom: 10,
            }}
          >
            Iron man (2008)
          </Text>
          <Text style={{ color: "#FFFFFF", marginBottom: 5 }}>
            05/02/2008 (US)
          </Text>
          <Text style={{ color: "#FFFFFF" }}>
            Action, Science Fiction, Adventure 2h 6m
          </Text>
        </View>
      </HeroBackground>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
