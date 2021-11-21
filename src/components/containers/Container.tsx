import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  children: any;
}

const Container = (props: Props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
