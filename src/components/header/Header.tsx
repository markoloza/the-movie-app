import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { primary } from "../../styles/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

interface HeaderProps {
  navigation?: NavigationStackProp<{ navigation: any }>;
  back: boolean;
}

const Header = ({ navigation, back }: HeaderProps) => {
  return (
    <SafeAreaView style={styles.safeZone} edges={["top", "left", "right"]}>
      <View style={styles.headerContainer}>
        {back && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="left" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        )}
        <Image source={require("../../../assets/logo/logo.png")}></Image>
        <Image source={require("../../../assets/logo/logo.png")}></Image>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeZone: {
    backgroundColor: primary.brand,
  },
  headerContainer: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    left: 10,
    top: 28,
  },
});
