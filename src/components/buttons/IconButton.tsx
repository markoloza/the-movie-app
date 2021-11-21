import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  icon?: any;
  label?: string;
}

const IconButton = (props: Props) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <MaterialIcons name={props.icon} size={24} color="#0B253F" />
      <Text style={styles.buttonLabel}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 16,
  },
});
