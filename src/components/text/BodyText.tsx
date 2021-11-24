import React from "react";
import { StyleSheet, Text, StyleProp, ViewStyle } from "react-native";
import { Typography } from "../../styles";

interface BodyTextProps {
  children?: JSX.Element | string;
  style?: any;
}

const BodyText = ({ children, style }: BodyTextProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default BodyText;

const styles = StyleSheet.create({
  text: {
    ...Typography.body.regular,
    marginBottom: 5,
  },
});
