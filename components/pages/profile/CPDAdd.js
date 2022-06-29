import { HeaderBackButton } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export class CPDAdd extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <HeaderBackButton
          onPress={() => {
            navigation.navigateBack();
          }}
        />
      ),
    };
  };

  render() {
    return <View></View>;
  }
}

const styles = StyleSheet.create({
  container: {},
});
