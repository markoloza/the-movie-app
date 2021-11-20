import * as React from "react";
import RootStack from "./stacks/RootStack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const MyTheme = {
  colors: {
    backgroundColor: "#FFFFFF",
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
