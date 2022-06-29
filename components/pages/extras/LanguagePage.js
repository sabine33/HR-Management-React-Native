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

import { RadioButton } from "react-native-paper";

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

      <RadioButton />
    </View>
  );
}

export function LanguagePage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Languages" });
  }, []);

  return (
    <View style={styles.container}>
      <ToggleMenu title="English" subtitle="English(UK)" />
      <ToggleMenu title="नेपाली" subtitle="Nepali(NPL)" />
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
