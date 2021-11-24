import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

interface CardContainerProps {
  onPress: () => void;
  children: JSX.Element;
}

const CardContainer = ({ onPress, children }: CardContainerProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      {children}
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
