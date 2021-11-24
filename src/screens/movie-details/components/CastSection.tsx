import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { BodyText } from "../../../components/text";

interface CastSectionProps {
  cast: any;
}

interface CastItemProps {
  original_name: string;
  known_for_department: string;
}

const CastSection = ({ cast }: CastSectionProps) => {
  return (
    <View style={styles.castSectionContainer}>
      {cast.map((item: CastItemProps, index: number) => {
        return (
          <View
            key={index.toString()}
            style={{
              width: (Dimensions.get("window").width - 30) / 3,
              marginBottom: 20,
              paddingHorizontal: 5,
            }}
          >
            <BodyText style={styles.textBold}>{item.original_name}</BodyText>
            <BodyText>{item.known_for_department}</BodyText>
          </View>
        );
      })}
    </View>
  );
};

export default CastSection;

const styles = StyleSheet.create({
  castSectionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  textBold: {
    fontWeight: "bold",
  },
});
