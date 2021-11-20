import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

interface Props {}

const SearchInput = (props: Props) => {
  return (
    <View style={styles.searchInputContainer}>
      <TextInput style={styles.searchInput} placeholder="Search" />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchInputContainer: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#EAEAEB",
  },
  searchInput: {
    // backgroundColor: "gold",
    flex: 1,
    borderRadius: 10,
    paddingLeft: 40,
  },
});
