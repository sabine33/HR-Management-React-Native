import { StyleSheet } from "react-native";
import dummy from "../../../assets/dummy.png";
export default StyleSheet.create({
  blueText: {
    color: "#344771",
    /*fontSize: 17*/
  },
  redText: {
    color: "#ee2f32",
  },
  circleText: {
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#ee2f32",
    borderRadius: 90,
    height: 80,
    width: 80,
    padding: 20,
    margin: 10,
    color: "#fff",
  },
  circleChatText: {
    borderRadius: 90,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ee2f32",
    textAlign: "center",
    lineHeight: 40,
    fontSize: 20,
    color: "#fff",
  },
});

export const randomColor = (num) =>
  "#" + Math.floor(num * 16777215).toString(16);

export const fonts = {
  tiny: 14,
  small: 17,
  medium: 20,
  large: 23,
};
export const colors = {
  black: "#888",
  primaryColor: "#ee2f32",
  secondary: "#f98d4c",
  blue: "",
  darkBlue: "",
  lightBlue: "",
};

export const images = {
  dummy: dummy,
};

export const textStyleTheme = {
  colors: {
    placeholder: "#334873",
    text: "#334873",
    primary: "#334873",
    underlineColor: "transparent",
    background: "#003489",
  },
};
