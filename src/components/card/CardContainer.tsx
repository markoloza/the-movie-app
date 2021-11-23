import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  onPress: any;
  children: any;
}

const CardContainer = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.cardContainer}>
      {props.children}
    </TouchableOpacity>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 150,
    marginHorizontal: 5,
    marginVertical: 15,
    borderRadius: 10,
    backgroundColor: "#eee",
    overflow: "hidden",
  },
});
