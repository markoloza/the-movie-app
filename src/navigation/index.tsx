import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { RootStackParamList } from "./types";
// import LinkingConfiguration from "./LinkingConfiguration";
import MovieSearch from "../screens/movie-search";
import MovieDetails from "../screens/movie-details";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MovieSearch" component={MovieSearch} />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
