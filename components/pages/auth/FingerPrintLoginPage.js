import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../generic";

export class FingerPrintLoginPage extends React.Component {
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
          style={{
            marginBottom: 50,
          }}
        />
        <Image
          source={require("../../../assets/matpat.png")}
          resizeMode="center"
          style={{ marginBottom: 50, height: 150 }}
        />
        <Text
          style={{ fontSize: 20 }}
          onPress={() => {
            this.props.navigation.navigate("Main", { screen: "Main" });
          }}
        >
          Fingerprint Login
        </Text>
        <Text style={{ /*fontSize: 17*/ marginTop: 20 }}>
          Fingerprint Authentication
        </Text>

        <Image
          source={require("../../../assets/fingerprint.png")}
          style={{ marginTop: 50, marginBottom: 30 }}
        />
        <Text>Touch Senser</Text>

        <View style={{ width: "80%", position: "absolute", bottom: 50 }}>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: "#000",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                /*fontSize: 17*/
                fontWeight: "bold",
                textAlign: "center",
              }}
              onPress={() => {
                this.props.navigation.navigate("Main");
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
