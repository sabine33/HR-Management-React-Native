import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, fonts, randomColor } from "../generic/GlobalStyles";

export class RequestSuccessPage extends React.Component {
  constructor(props) {
    super(props);
    // this.props.navigation.setOptions({ headerTitle: "Summary" });
  }
  render() {
    return (
      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
          }}
        >
          <Image source={require("../../../assets/thanks_success.png")}></Image>
          <Text
            style={{
              fontSize: 17,
              textAlign: "center",
              paddingVertical: 20,
            }}
          >
            Your request is successfully processed.
          </Text>
        </View>

        <View
          style={{
            width: "80%",
          }}
        >
          <TouchableOpacity
            style={{
              elevation: 10,
              padding: 15,
              backgroundColor: colors.secondary,
              margin: 15,
              marginTop: 50,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 14,
              }}
              onPress={() => {
                this.props.navigation.navigate("Main", {
                  screen: "Home",
                });
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
