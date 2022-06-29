import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export class NoNetworkPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../../assets/no_network.png")} />
        <Text>Hmm.</Text>
        <Text onPress={() => {}}>No Network Found.</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#fda05e",
            padding: 15,
            width: 300,
            alignSelf: "center",
            borderRadius: 20,
            marginTop: 50,
            elevation: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            Try Again
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
