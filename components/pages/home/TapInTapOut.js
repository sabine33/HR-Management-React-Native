import React, { useState } from "react";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { Text, StyleSheet, View, Image } from "react-native";
import { colors, images } from "../generic/GlobalStyles";

import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withInAppNotification } from "react-native-in-app-notification";

function TapInTapOut({ navigation }) {
  const onTapped = () => {};
  let [name, setName] = useState("ios-chevron-down-circle");
  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginVertical: 5,
        }}
      >
        <Text>Tap In/Tap out</Text>
        <Text>View All</Text>
      </View>

      <View
        style={{
          justifyContent: "center",

          margin: 5,
          padding: 10,
          elevation: 10,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: "#fff",
            }}
            onPress={onTapped()}
          >
            <Ionicons
              name={name}
              color={colors.primaryColor}
              size={40}
              onPress={() => {
                setName(
                  name == "ios-chevron-up-circle"
                    ? "ios-chevron-down-circle"
                    : "ios-chevron-up-circle"
                );
              }}
            />
          </TouchableOpacity>
          <View>
            <Text style={{ fontWeight: "bold" }}>Tap In</Text>
            <Text>10:26</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>Tap Out</Text>
            <Text>--:--</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    elevation: 20,
  },
});
export default TapInTapOut;
