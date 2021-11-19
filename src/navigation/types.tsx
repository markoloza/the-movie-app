export type NO_PARAMS = undefined
export type RootStackParamList = {
  MovieDetails: NO_PARAMS
  MovieSearch: NO_PARAMS
}

export type MainStackParamList = {
  Main: NO_PARAMS
  CompletedScreen: NO_PARAMS
}

export type BottomTabParamList = {
  Home: NO_PARAMS
  Stats: NO_PARAMS
  Settings: NO_PARAMS
}

export type HomeParamList = {
  HomeScreen: NO_PARAMS
  PlayScreen: {
    id: string
  }
}

export type StatsParamList = {
  StatsScreen: NO_PARAMS
}

export type SettingsParamList = {
  SettingsScreen: NO_PARAMS
}
