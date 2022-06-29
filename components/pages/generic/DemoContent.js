import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

export class DemoContent extends React.Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          flex: 1,
          paddingTop: 100,
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={require("../../../assets/logo.png")}
          style={{ marginBottom: 50 }}
        />
        <Text style={{ fontSize: 20 }}>Fingerprint Login</Text>
        <Text style={{ /*fontSize: 17*/ marginTop: 20 }}>
          Fingerprint Authentication
        </Text>

        <Image
          source={require("../../../assets/fingerprint.png")}
          style={{ marginTop: 50, marginBottom: 30 }}
        />
        <Text>Touch Senser</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
