import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface HeroBackgroundProps {
  children: any;
  source: string;
}

const HeroBackground = (props: HeroBackgroundProps) => {
  return (
    <ImageBackground
      source={{ uri: props.source }}
      resizeMode="cover"
      style={styles.background}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
        style={styles.gradient}
      >
        {props.children}
      </LinearGradient>
    </ImageBackground>
  );
};

export default HeroBackground;

const styles = StyleSheet.create({
  background: {
    height: 300,
  },
  gradient: {
    flex: 1,
    padding: 15,
  },
});
