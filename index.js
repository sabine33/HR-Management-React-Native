import { registerRootComponent } from "expo";
import React from "react";
import App from "./App";
import { Home } from "./Home";
import { MainStackNavigator } from "./MainStackNavigator";
import LoadingScreen from "./pages/LoadingScreen";
import { Text } from "react-native";
import { Root } from "native-base";
import { LoadingUI } from "./components/pages/auth";

let oldRender = Text.render;
Text.render = function (...args) {
  let origin = oldRender.call(this, ...args);
  return React.cloneElement(origin, {
    style: [
      { color: "#222", fontFamily: "OpenSans-Regular", fontSize: 14 },
      origin.props.style,
    ],
  });
};
import { LogBox } from "react-native";
// LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

registerRootComponent(Home);
