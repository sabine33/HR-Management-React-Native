import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MenuItem } from "../generic/MenuItem";
import { GlobalStyles } from "../generic";
import { Icon, Row, Thumbnail } from "native-base";
import { THUMB_URL } from "../../../helpers";
import { StatusBar } from "expo-status-bar";
import { colors } from "../generic/GlobalStyles";
import { color } from "react-native-reanimated";

export function StaffPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerStyle: {
        backgroundColor: colors.primaryColor,
      },
    });
  }, []);
  return (
    <View>
      <View
        style={{
          backgroundColor: colors.secondary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={GlobalStyles.circleText}>AB</Text>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Aabhar Bikram</Text>
        <Text style={{ color: "#fff", fontSize: 14 }}>Payroll</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Icon name="locate" style={{ color: "#fff" }}></Icon>
          <View style={{ width: 10 }}></View>
          <Text style={{ color: "#fff", fontSize: 14 }}>Head Office</Text>
        </View>
        <Icon
          name="ios-chatbubble-outline"
          color="#fff"
          size={30}
          style={{
            marginTop: 20,
            marginBottom: 20,
            color: "#fff",
          }}
          onPress={() => {
            navigation.navigate("Root", { screen: "ChatPage" });
          }}
        ></Icon>
      </View>

      <View>
        <View>
          <MenuItem
            title="information"
            icon="ios-information-circle"
            onPress={() => {
              navigation.navigate("Root", {
                screen: "StaffPersonalInformationPage",
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
