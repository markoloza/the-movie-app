import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface HeroBackgroundProps {
  children: any;
}

const HeroBackground = (props: HeroBackgroundProps) => {
  return (
    <ImageBackground
      source={require("../../../assets/moc-image.jpeg")}
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
    flex: 1,
    // justifyContent: "flex-end",
  },
  gradient: {
    padding: 10,
    flex: 1,
  },
});
