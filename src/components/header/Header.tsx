import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  navigation: any;
  back: boolean;
}

const Header = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeZone} edges={["top", "left", "right"]}>
      <View style={styles.headerContainer}>
        {props.back && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => props.navigation.goBack()}
          >
            <AntDesign name="left" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        )}
        <Image source={require("../../../assets/logo/logo.png")}></Image>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeZone: {
    backgroundColor: "#0B253F",
  },
  headerContainer: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0B253F",
  },
  backButton: {
    position: "absolute",
    left: 10,
    top: 28,
  },
});
