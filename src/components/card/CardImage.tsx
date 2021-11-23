import React from "react";
import { StyleSheet, Image } from "react-native";

interface CardImageProps {
  source: string;
}

const CardImage = ({ source }: CardImageProps) => {
  return (
    <Image
      style={styles.coverImage}
      source={{
        uri: source,
      }}
    />
  );
};

export default CardImage;

const styles = StyleSheet.create({
  coverImage: {
    width: "100%",
    height: "100%",
  },
});
