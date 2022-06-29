import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { Appbar, TextInput } from "react-native-paper";

export class MyBankDetailPage extends React.Component {
  theme = {
    colors: {
      placeholder: "#334873",
      text: "#334873",
      primary: "#334873",
      underlineColor: "transparent",
      background: "#003489",
    },
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
          <TextInput
            placeholder="Bank Name"
            label="Bank Name"
            style={styles.textStyle}
            theme={this.theme}
          />
          <TextInput
            placeholder="Sort code"
            label="Sort Code"
            style={styles.textStyle}
            theme={this.theme}
          />
          <TextInput
            placeholder="Account Number"
            label="Account Number"
            style={styles.textStyle}
            theme={this.theme}
          />
          <TextInput
            placeholder="Other Account Information"
            label="Other Account Info."
            style={styles.textStyle}
            theme={this.theme}
          />
          <TextInput
            placeholder="Account Name"
            label="Account Name"
            style={styles.textStyle}
            theme={this.theme}
          />
          <TextInput
            placeholder="Address"
            label="Address"
            selectionColor="#000"
            style={styles.textStyle}
            theme={this.theme}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
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
