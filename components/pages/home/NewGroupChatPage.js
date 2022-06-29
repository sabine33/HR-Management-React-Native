import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { HeaderBar } from "../generic/HeaderBar";

import Ionicons from "react-native-vector-icons/Ionicons";
import { BottomSheet, ListItem } from "react-native-elements";
import { Appbar, Checkbox } from "react-native-paper";
import { TextInput } from "react-native";
import { colors } from "../generic/GlobalStyles";

export function NewGroupChatPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text
          style={{ color: "#fff", paddingHorizontal: 20, fontWeight: "bold" }}
          onPress={() => {
            navigation.navigate("Root", { screen: "ChatPage" });
          }}
        >
          Done
        </Text>
      ),
    });
  }, []);

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <TextInput placeholder="Chat Name" />
      <Text>Members</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {[1, 2, 3].map((x) => {
          return (
            <View
              style={{
                borderRadius: 30,
                backgroundColor: colors.secondary,
                marginHorizontal: 5,
                marginVertical: 5,
                padding: 5,
                paddingHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
                // paddingHorizontal: 5,
              }}
            >
              <Text style={{ textAlign: "center", color: "#fff" }}>
                Aabhar Bikram{" "}
              </Text>
              <Text style={{ color: "#fff" }}>X</Text>
            </View>
          );
        })}
      </View>
      {[1, 2, 3].map((x) => {
        return <PersonItem name={"Person " + x} />;
      })}
    </View>
  );
}
function PersonItem({ name }) {
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderBottomColor: "#ddd",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        marginVertical: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: colors.primaryColor,
            color: "#fff",
            borderRadius: 90,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            AB
          </Text>
        </View>
        <Text
          style={{
            paddingLeft: 20,
            fontWeight: "bold",
            color: colors.primaryColor,
          }}
        >
          {name}
        </Text>
      </View>
      <Checkbox status="checked" color={colors.primaryColor} />
    </View>
  );
}
