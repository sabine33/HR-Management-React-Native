import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar, Colors } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

export class HelloUserPage extends React.Component {
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
        <Image
          source={require("../../../assets/finger.jpg")}
          style={{ marginBottom: 10 }}
        />

        <Text
          style={{ fontSize: 20, fontWeight: "600", color: Colors.blue800 }}
        >
          Hi Sabin Khanal
        </Text>
        <Text style={{ /*fontSize: 17*/ marginTop: 20 }}>
          Login with your fingerprint
        </Text>

        <Ionicons
          name="ios-checkmark-circle"
          style={{
            paddingTop: 30,
            paddingBottom: 30,
          }}
          size={40}
          color="green"
        />
        <Text
          style={{
            color: "green",
          }}
          onPress={() => {
            this.props.navigation.navigate("Root", {
              screen: "Homepage",
            });
          }}
        >
          Fingerprint recognized
        </Text>
        <Text
          style={{
            paddingTop: 30,
            paddingBottom: 10,
            textDecorationLine: "underline",
          }}
        >
          Terms and Conditions
        </Text>
        <Text
          style={{
            paddingTop: 0,
            textDecorationLine: "underline",
          }}
          onPress={() => {
            this.props.navigation.navigate("Root", {
              screen: "VerificationPage",
            });
          }}
        >
          Use another account
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
