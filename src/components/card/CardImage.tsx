import React from "react";
import { StyleSheet, Image } from "react-native";

interface Props {
  source: string;
}

const CardImage = (props: Props) => {
  return (
    <Image
      style={styles.coverImage}
      source={{
        uri: props.source,
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
