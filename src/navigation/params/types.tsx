import { RouteProp } from "@react-navigation/native";

export type NO_PARAMS = undefined;

export type RootStackParamList = {
  MovieDetails: NO_PARAMS;
  MovieSearch: NO_PARAMS;
  // MovieDetails: IRootRouteProps;
  // MovieSearch: IRootRouteProps;
};

// export interface IRootRouteProps {
//   propName: propValue;
// }

// export type RootStackScreenProps<T extends keyof RootStackParamList> = {
//   navigation: StackNavigationProp<RootStackParamList, T>;
//   route: RouteProp<RootStackParamList, T>;
// };
