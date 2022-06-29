import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Appbar, ProgressBar, Colors } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../generic";
import { colors } from "../generic/GlobalStyles";

export class LoadingUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={require("../../../assets/matpat.png")}
          resizeMode="contain"
          style={{ marginBottom: 0, width: 300 }}
        />
        <Text style={{ fontSize: 20, color: colors.primaryColor }}>
          Loading..
        </Text>

        <View style={{ width: "70%", paddingTop: 10, paddingBottom: 30 }}>
          <ProgressBar
            progress={1}
            color={colors.primaryColor}
            indeterminate={true}
            style={{}}
          />
        </View>

        <Text
          style={{ color: Colors.blue300 }}
          onPress={() => {
            this.onTouch();
          }}
        >
          Please wait...
        </Text>
      </SafeAreaView>
    );
  }
  onTouch = () => {
    // alert("presssed");
    // console.log(this.props.navigation);

    this.props.navigation.navigate("Root", {
      screen: "FingerPrintLoginPage",
    });
  };
  componentDidMount() {
    // setTimeout(() => {
    // }, 3000);
  }
}

const styles = StyleSheet.create({
  container: {},
});
