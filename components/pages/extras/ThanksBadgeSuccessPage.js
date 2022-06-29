import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors, fonts, randomColor } from "../generic/GlobalStyles";

export class ThanksBadgeSuccessPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({ headerTitle: "Summary" });
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
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              paddingVertical: 20,
            }}
          >
            Your thanks was sent successfully !
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
                navigation.navigate("Main", { screen: "Main" });
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
