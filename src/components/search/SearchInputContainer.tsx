import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import IconButton from "../buttons/IconButton";

interface Props {
  children: any;
  isFocused: boolean;
}

const SearchInputContainer = (props: Props) => {
  return (
    <View style={styles.searchInputContainer}>
      <View style={styles.innerPart}>{props.children}</View>
      {props.isFocused && <IconButton label="Cancel" />}
    </View>
  );
};

export default SearchInputContainer;

const styles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  innerPart: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#EAEAEB",
  },
});
