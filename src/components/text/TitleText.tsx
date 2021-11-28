import React from "react";
import { StyleSheet, Text } from "react-native";
import { Typography } from "../../styles";

interface TitleTextProps {
  children?: JSX.Element | string;
  style?: any;
}

const TitleText = ({ children, style }: TitleTextProps) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    ...Typography.header.headerBold,
    marginBottom: 10,
  },
});
