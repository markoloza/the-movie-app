import React from "react";
import { StyleSheet, Text } from "react-native";
import { Typography } from "../../styles";

interface Props {
  children: string;
  style?: any;
}

const BodyText = (props: Props) => {
  return (
    <Text style={[styles.text, { ...props.style }]}>{props.children}</Text>
  );
};

export default BodyText;

const styles = StyleSheet.create({
  text: {
    ...Typography.body.regular,
    marginBottom: 5
  },
});
