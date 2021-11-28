import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { primary } from "../../styles/colors";

interface IconButtonProps {
  icon?: any;
  label?: string;
  onPress?: () => void;
}

const IconButton = ({ icon, label, onPress }: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <MaterialIcons name={icon} size={24} color={primary.brand} />
      <Text style={styles.buttonLabel}>{label}</Text>
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
