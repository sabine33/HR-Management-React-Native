import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Appbar, Card } from "react-native-paper";
import { HeaderBar } from "../generic/HeaderBar";

function AlertItem({}) {
  return (
    <View
      style={{
        elevation: 10,
        padding: 20,
        margin: 10,
      }}
    >
      <Text
        style={{
          fontSize: 16,
        }}
      >
        I am an alert !
      </Text>
    </View>
  );
}

export function AlertComponent({ navigation }) {
  useEffect(() => {
    // navigation.setOptions({ headerTitle: "Hello", headerShown: true });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: "#ee2f32" }}>
        <Appbar.Content title="Alerts" />
      </Appbar.Header>

      <View style={styles.container}>
        <Image
          source={require("../../../assets/not_found.png")}
          width={100}
        ></Image>
        <Text
          style={
            {
              /*fontSize: 17*/
            }
          }
        >
          No notifications found
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
