import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors, fonts } from "../generic/GlobalStyles";
import { Icon } from "native-base";

export class ThanksBadgePage extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({ headerTitle: "Choose a Thanks Badge" });
  }
  render() {
    return (
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {[1, 2, 3, 4].map((x) => {
          return <ThanksBadge key={x} navigation={this.props.navigation} />;
        })}
      </View>
    );
  }
}

function ThanksBadge({ navigation }) {
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 10,
        backgroundColor: "#fff",
        width: "45%",
        margin: "2%",
        padding: 20,
      }}
    >
      <Icon
        name="trophy"
        style={{
          color: colors.primaryColor,
        }}
      ></Icon>
      <Text
        style={{ paddingVertical: 20, fontWeight: "bold" }}
        onPress={() => {
          navigation.navigate("Root", { screen: "ChoosePersonPage" });
        }}
      >
        Ambassador
      </Text>
      <Text style={{ color: colors.secondary }}>info</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
