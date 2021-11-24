import React from "react";
import { StyleSheet, View } from "react-native";

interface ContainerProps {
  children?: JSX.Element | JSX.Element[];
}

const Container = ({ children }: ContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
