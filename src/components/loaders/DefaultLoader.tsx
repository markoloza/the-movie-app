import React from "react";
import { ActivityIndicator, View } from "react-native";

interface Props {}

const DefaultLoader = (props: Props) => {
  return (
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
    >
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default DefaultLoader;
