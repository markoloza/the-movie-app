import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface SearchInputProps {
  onChangeText: any;
  // value: string;
  placeholder: string;
  onPressIn: () => void;
}

const SearchInput = ({
  onChangeText,
  // value,
  placeholder,
  onPressIn,
}: SearchInputProps) => {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder={placeholder}
      // value={value}
      onChangeText={onChangeText}
      onPressIn={onPressIn}
    />
  );
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
