import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Calendar } from "react-native-calendars";
import { Button, Colors, TextInput, ToggleButton } from "react-native-paper";
import {
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "react-native";
import { GlobalStyles } from "../generic";
import { images } from "../generic/GlobalStyles";

function ToggleMenu({ title, subtitle, navigation }) {
  return (
    <View style={styles.card}>
      <View>
        <Text
          style={
            {
              /*fontSize: 17*/
            }
          }
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
          }}
        >
          {subtitle}
        </Text>
      </View>

      <Switch />
    </View>
  );
}

export function NotificationsPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Notifications" });
  }, []);

  return (
    <View style={styles.container}>
      <ToggleMenu title="Chat" subtitle="Toggle Notifications On/Off" />
      <ToggleMenu
        title="Holiday Requests"
        subtitle="Toggle Notifications On/Off"
      />
      <ToggleMenu title="Other Events" subtitle="Toggle Notifications On/Off" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    marginTop: 10,
    elevation: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
