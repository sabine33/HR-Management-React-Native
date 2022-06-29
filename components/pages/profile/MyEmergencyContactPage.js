import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { Picker } from "react-native";
import { Appbar, TextInput } from "react-native-paper";

export class MyEmergencyContactPage extends React.Component {
  theme = {
    colors: {
      placeholder: "#334873",
      text: "#334873",
      primary: "#334873",
      underlineColor: "transparent",
      background: "#003489",
    },
  };
  state = {
    selectedValue: "java",
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
          <TextInput
            placeholder="Name"
            label="Name"
            style={styles.textStyle}
            theme={this.theme}
          />
          <Picker
            selectedValue={this.state.selectedValue}
            style={{
              marginTop: 10,
            }}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ selectedValue: itemValue });
            }}
          >
            <Picker.Item label="Relationship" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <TextInput
            placeholder="Address Line 1"
            label="Address Line 1"
            style={styles.textStyle}
            theme={this.theme}
          />
          <TextInput
            placeholder="Address Line 2"
            label="Address Line 2"
            style={styles.textStyle}
            theme={this.theme}
          />

          <TextInput
            placeholder="Country"
            label="Country"
            style={styles.textStyle}
            theme={this.theme}
          />

          <TextInput
            placeholder="Phone Number"
            label="Phone Number"
            style={styles.textStyle}
            theme={this.theme}
          />
          <TextInput
            placeholder="Country/state"
            label="Country/state"
            style={styles.textStyle}
            theme={this.theme}
          />
          <TextInput
            placeholder="Town/city"
            label="Town/city"
            style={styles.textStyle}
            theme={this.theme}
          />

          <TextInput
            placeholder="Zip/Postcode"
            label="Zip/postcode"
            style={styles.textStyle}
            theme={this.theme}
          />
          <TextInput
            placeholder="Comments"
            label="Comments"
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
