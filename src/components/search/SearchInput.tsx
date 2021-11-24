import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface SearchInputProps {
  value: string;
  placeholder: string;
  onFocus: () => void;
  onChangeText: any;
}

const SearchInput = ({
  onChangeText,
  placeholder,
  onFocus,
  value,
}: SearchInputProps) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      style={styles.searchInput}
      placeholder={placeholder}
      defaultValue={value}
      onFocus={onFocus}
    />
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    height: "100%",
    borderRadius: 10,
    fontSize: 16,
  },
});
