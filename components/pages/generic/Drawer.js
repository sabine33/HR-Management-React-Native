import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

class Feed extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Feed Screen</Text>
      </View>
    );
  }
}

class Article extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Article Screen</Text>
      </View>
    );
  }
}

const Drawer = createDrawerNavigator();

class MyDrawer extends React.Component {
  render() {
    return (
      <Drawer.Navigator drawerPosition="right">
        <Drawer.Screen name="Feed" component={Article} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    );
  }
}

export class DrawerUI extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }
}
