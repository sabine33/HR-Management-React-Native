import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { color } from "react-native-reanimated";
import { Home } from "../Home";

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: 300,
    marginVertical: 32,
    marginTop: 100,
  },
  text: {
    // color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    color: "#ee2f32",
  },
  title: {
    color: "white",
    textAlign: "center",
    color: "#fcb524",
  },
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: "#f75d4d",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
});

// slides = [...]
const slides = [
  {
    key: "one",
    title: "What is Pie?",
    text:
      " PIE is a full service HR software . It helps you manage your employees, pay easily in minutes automatically calculating attendance, leave and tax. ",
    image: require("../assets/images/work.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "How does PIE keep my data secure?    ",
    text:
      "When it comes to protecting the privacy and confidentiality of our client's information, we don't take shortcuts. ",
    image: require("../assets/images/ic_login_info_splash_1.png"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Is your software Pen-Tested ?",
    text:
      "Yes. In fact , its our regular job. We automate this process manually not by the software.    ",
    image: require("../assets/images/ic_login_info_splash_2.png"),
    backgroundColor: "#22bcb5",
  },
];

export default class LoadingScreen extends React.Component {
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,

          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Image
          source={item.image}
          style={styles.image}
          resizeMethod="scale"
          resizeMode="center"
        />
        <Text
          style={{
            color: "#fcb524",
            textAlign: "center",
            width: "80%",
            fontFamily: "OpenSans-Bold",
            fontSize: 20,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            color: "#222",
            fontFamily: "OpenSans-Regular",
            paddingVertical: 20,
            textAlign: "center",
            width: "80%",
          }}
        >
          {item.text}
        </Text>
      </View>
    );
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="chevron-forward-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  render() {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={this._renderItem}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        indicatorStyle="default"
        showSkipButton={true}
        onDone={() => {
          this.props.navigation.navigate("Root", { screen: "LoadingUI" });
        }}
      />
    );
  }
}
