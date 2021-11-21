import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import {primary} from "../../styles/colors"

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
