import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {}

const SearchInput = (props: Props) => {
  return <TextInput style={styles.searchInput} placeholder="Search" />;
};

export default SearchInput;

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    borderRadius: 10,
  },
});
