import React from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../buttons/IconButton";

interface SearchContainerProps {
  children: JSX.Element | JSX.Element[];
  isFocused?: boolean;
  onPress?: () => void;
}

const SearchInputContainer = ({
  isFocused,
  children,
  onPress,
}: SearchContainerProps) => {
  return (
    <View style={styles.searchInputContainer}>
      <View style={[styles.innerPart, isFocused && { marginRight: 10 }]}>
        {children}
      </View>
      {isFocused && <IconButton onPress={onPress} label="Cancel" />}
    </View>
  );
};

export default SearchInputContainer;

const styles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
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
