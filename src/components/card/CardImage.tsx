import React from "react";
import { StyleSheet, Image } from "react-native";

interface Props {}

const CardImage = (props: Props) => {
  return (
    <Image
      style={styles.coverImage}
      source={require("../../../assets/moc-image.jpeg")}
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
