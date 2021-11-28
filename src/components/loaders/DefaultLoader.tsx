import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const DefaultLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default DefaultLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
