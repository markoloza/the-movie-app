import React from "react";
import { StyleSheet, Text } from "react-native";
import { Typography } from "../../styles";

interface Props {
  children: string;
  style?: any;
}

const TitleText = (props: Props) => {
  return (
    <Text style={[styles.title, { ...props.style }]}>{props.children}</Text>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    ...Typography.header.headerBold,
    marginBottom: 10,
  },
});
