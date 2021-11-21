import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../params/types";
import Header from "../../components/header/Header";
import MovieSearch from "../../screens/movie-search";
import MovieDetails from "../../screens/movie-details";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack({}) {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: "#FFF" },
        header: (props: any) => <Header {...props} />,
      }}
    >
      <Stack.Screen name="MovieSearch" component={MovieSearch} />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        // options={{ title: "Movie Details" }}r
      />
    </Stack.Navigator>
  );
}
