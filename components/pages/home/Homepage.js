import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import AnimatedSplash from "react-native-animated-splash-screen";
import AuthorizationUI from "./AuthorizationUI";
import {
  ChatComponent,
  PlannerComponent,
  NewReportUI,
  HomeComponent,
  AlertComponent,
} from "./index";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { colors } from "../generic/GlobalStyles";
import NewHomePage from "./NewHomePage";
import AuthorizationPage from "./AuthorizationPage";
import ApprovalsPage from "./ApprovalsPage";
import AppStatusBar from "./AppStatusBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Tab = createBottomTabNavigator();

export function Homepage() {
  let [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <AnimatedSplash
      logoWidth={500}
      isLoaded={isLoaded}
      backgroundColor={"#fafafa"}
      logoImage={require("../../../assets/logo.png")}
    >
      <Tab.Navigator
        initialRouteName="Authorization"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = focused ? "ios-home" : "ios-home-outline";
                break;
              case "Chat":
                iconName = focused
                  ? "ios-chatbubbles"
                  : "ios-chatbubbles-outline";
                break;
              case "Approvals":
                iconName = focused ? "ios-shield" : "ios-shield-outline";
                break;
              case "Planner":
                iconName = focused ? "ios-calendar" : "ios-calendar-outline";
                break;
              case "Alerts":
                iconName = focused
                  ? "ios-notifications"
                  : "ios-notifications-outline";
                break;
              case "Menus":
                iconName = focused ? "ios-menu" : "ios-menu-outline";
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={NewHomePage} options={{}} />
        <Tab.Screen
          name="Chat"
          component={ChatComponent}
          options={{ tabBarBadge: 1 }}
        />
        <Tab.Screen
          name="Approvals"
          component={ApprovalsPage}
          options={{ tabBarBadge: 2 }}
        />
        <Tab.Screen name="Planner" component={PlannerComponent} />
        <Tab.Screen
          name="Alerts"
          component={AlertComponent}
          options={{ tabBarBadge: 2 }}
        />
        {/* <Tab.Screen name="Menus" component={ProfilePage} options={{}} /> */}
      </Tab.Navigator>
    </AnimatedSplash>
  );
}
