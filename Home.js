import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Homepage } from "./components/pages/home/Homepage";
import Ionicons from "react-native-vector-icons/Ionicons";
import { CustomDrawerNavigator } from "./components/pages/home/CustomDrawerNavigator";
import { MainStackNavigator } from "./MainStackNavigator";
import { Root } from "native-base";
import { InAppNotificationProvider } from "react-native-in-app-notification";
import { withInAppNotification } from "react-native-in-app-notification";
import AppStatusBar from "./components/pages/home/AppStatusBar";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isFontLoaded: false,
  };
  async componentDidMount() {
    // await Font.loadAsync({
    //   RobotoBold: require("./fonts/Roboto-Bold.ttf"),
    //   RobotoRegular: require("./fonts/Roboto-Regular.ttf"),
    // });
    this.setState({ isFontLoaded: true });
  }

  render() {
    return (
      <InAppNotificationProvider>
        <Root>
          <NavigationContainer>
            <Drawer.Navigator
              initialRouteName="Main"
              drawerContent={(props) => <CustomDrawerNavigator {...props} />}
              drawerType="slide"
              drawerPosition="left"
            >
              <Drawer.Screen
                name="Main"
                component={Homepage}
                options={{
                  title: "Main",
                  drawerIcon: ({ focused, size }) => (
                    <Ionicons
                      name="md-home"
                      size={size}
                      color={focused ? "#7cc" : "#ccc"}
                    />
                  ),
                }}
              />
              <Drawer.Screen name="Root" component={MainStackNavigator} />
            </Drawer.Navigator>
          </NavigationContainer>
        </Root>
      </InAppNotificationProvider>
    );
  }
}
