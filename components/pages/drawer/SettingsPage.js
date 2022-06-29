import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Calendar } from "react-native-calendars";
import { Button, Colors, TextInput, ToggleButton } from "react-native-paper";
import {
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { Picker } from "react-native";
import { GlobalStyles } from "../generic";
import { colors, images } from "../generic/GlobalStyles";
import { Icon } from "native-base";

function SettingsItem({ title, icon, onPress, navigation }) {
  return (
    <View style={styles.card}>
      <Icon name={icon} size={30} style={{ color: colors.primaryColor }} />
      <Text
        style={{
          fontSize: 14,
        }}
        onPress={() => onPress()}
      >
        {title}
      </Text>
      <Icon
        name="chevron-forward"
        size={25}
        style={{ color: colors.primaryColor }}
      />
    </View>
  );
}
function ToggleMenu({ title, navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.card}>
      <Text
        style={{
          fontSize: 14,
        }}
      >
        {title}
      </Text>
      <Switch
        disabled={false}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

export function SettingsPage({ navigation }) {
  return (
    <View style={styles.container}>
      <SettingsItem
        title="Notifications"
        icon="notifications"
        onPress={() => {
          navigation.navigate("Root", {
            screen: "NotificationsSettings",
          });
        }}
        navigation={navigation}
      />
      <SettingsItem
        title="Language"
        icon="language"
        onPress={() => {
          navigation.navigate("Root", {
            screen: "Language",
          });
        }}
        navigation={navigation}
      />
      <SettingsItem
        title="Whats New"
        icon="information-outline"
        onPress={() => {
          navigation.navigate("Root", {
            screen: "WhatsNew",
          });
        }}
        navigation={navigation}
      />
      <ToggleMenu title="Automatic Tap In/Out" />
      <ToggleMenu title="Biomatric Authentication" />
      <ToggleMenu title="Sounds" />
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
