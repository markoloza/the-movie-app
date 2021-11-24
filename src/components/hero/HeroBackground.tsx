import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface HeroBackgroundProps {
  children?: JSX.Element | JSX.Element[];
  source: string;
}

const HeroBackground = ({ children, source }: HeroBackgroundProps) => {
  return (
    <ImageBackground
      source={{ uri: source }}
      resizeMode="cover"
      style={styles.background}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
        style={styles.gradient}
      >
        {children}
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
