import { RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

export type NO_PARAMS = undefined;

export type RootStackParamList = {
  MovieDetails: { id: string };
  MovieSearch: NO_PARAMS;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
