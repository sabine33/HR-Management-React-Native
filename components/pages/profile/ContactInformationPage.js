import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { Picker } from "react-native";
import { Appbar, TextInput } from "react-native-paper";

export function ContactInformationPage({ props }) {
  const theme = {
    colors: {
      placeholder: "#334873",
      text: "#334873",
      primary: "#334873",
      underlineColor: "transparent",
      background: "#003489",
    },
  };
  const [selectedValue, setSelectedValue] = useState("Java");

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          label="Name"
          style={styles.textStyle}
          theme={theme}
        />
        <Picker
          selectedValue={selectedValue}
          style={{
            marginTop: 10,
          }}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedValue(itemValue);
          }}
        >
          <Picker.Item label="Relationship" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <TextInput
          placeholder="Address Line 1"
          label="Address Line 1"
          style={styles.textStyle}
          theme={theme}
        />
        <TextInput
          placeholder="Address Line 2"
          label="Address Line 2"
          style={styles.textStyle}
          theme={theme}
        />

        <TextInput
          placeholder="Country"
          label="Country"
          style={styles.textStyle}
          theme={theme}
        />

        <TextInput
          placeholder="Phone Number"
          label="Phone Number"
          style={styles.textStyle}
          theme={theme}
        />
        <TextInput
          placeholder="Country/state"
          label="Country/state"
          style={styles.textStyle}
          theme={theme}
        />
        <TextInput
          placeholder="Town/city"
          label="Town/city"
          style={styles.textStyle}
          theme={theme}
        />

        <TextInput
          placeholder="Zip/Postcode"
          label="Zip/postcode"
          style={styles.textStyle}
          theme={theme}
        />
        <TextInput
          placeholder="Comments"
          label="Comments"
          style={styles.textStyle}
          theme={theme}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    margin: 10,
    backgroundColor: "#ffffff",
    color: "#ddd",
  },
  textStyle: {
    backgroundColor: "#fff",
  },
});
