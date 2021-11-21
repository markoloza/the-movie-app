import * as React from "react";
import RootStack from "./stacks/RootStack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
