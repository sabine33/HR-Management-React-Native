import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import { MenuItem } from "../generic/MenuItem";
import { HeaderBar } from "../generic/HeaderBar";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
});

export function MyInformationPage({ props, navigation }) {
  const state = {
    items: [
      {
        id: 0,
        title: "Personal Information",
        onPress: () => {
          navigation.navigate("Root", { screen: "PersonalInformationPage" });
        },
      },
      {
        id: 1,
        title: "Contact Information",
        onPress: () => {
          navigation.navigate("Root", { screen: "ContactInformationPage" });
        },
      },
      {
        id: 2,
        title: "Bank Details",
        onPress: () => {
          navigation.navigate("Root", { screen: "BankDetailsPage" });
        },
      },
      {
        id: 3,
        title: "Emergency Contact",
        onPress: () => {
          navigation.navigate("Root", { screen: "EmergencyContactPage" });
        },
      },
    ],
  };

  return (
    <View style={styles.container}>
      {/* <HeaderBar title="My Information"></HeaderBar> */}
      {state.items.map((x) => {
        return (
          <MenuItem
            title={x.title}
            key={x.id}
            onPress={() => {
              x.onPress();
            }}
          />
        );
      })}
    </View>
  );
}
