import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar, Colors, TextInput } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

export class VerificationPage extends React.Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          flex: 1,
          paddingTop: 100,
          backgroundColor: "#fafafa",
        }}
      >
        <Image
          source={require("../../../assets/logo.png")}
          style={{ marginBottom: 20 }}
        />

        <Text
          style={{ fontSize: 20, fontWeight: "600", color: Colors.blue800 }}
        >
          Please enter the verification code sent to sabin*****@gmail.com
        </Text>
        <Text style={{ /*fontSize: 17*/ marginTop: 20 }}>
          OTP will expire in 4:57
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TextInput placeholder="1" />
          <TextInput placeholder="2" />
          <TextInput placeholder="3" />
          <TextInput placeholder="4" />
          <TextInput placeholder="5" />
        </View>

        <TouchableOpacity
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              paddingTop: 30,
              paddingBottom: 10,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
