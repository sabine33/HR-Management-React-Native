import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Row, Icon } from "native-base";
import { colors } from "../generic/GlobalStyles";

// import { HomeComponent } from "./components/HomeComponent";

export function CustomDrawerNavigator({ navigation }) {
  const handleMenuClick = (key) => {
    switch (key) {
      case "Profile":
        navigation.navigate("Root", { screen: "Profile" });
        break;
      case "Authorizations":
        navigation.navigate("Root", { screen: "AuthorizationRequests" });
        break;
      case "Company":
        navigation.navigate("Root", { screen: "Company" });
        break;
      case "Documents":
        navigation.navigate("Root", { screen: "DocumentsPage" });
        break;
      case "Expenses":
        navigation.navigate("Root", { screen: "ExpenseReport" });
        break;
      case "News":
        navigation.navigate("Root", { screen: "NewsPage" });
        break;
      case "Thanks":
        navigation.navigate("Root", { screen: "ThanksPage" });
        break;
      case "Settings":
        navigation.navigate("Root", { screen: "SettingsPage" });
        break;
      case "Logout":
        navigation.navigate("Root", { screen: "LoginPage" });
        break;
    }
  };

  return (
    <DrawerContentScrollView>
      <View>
        <View
          style={{
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            marginTop: 20,
            width: 300,
          }}
        >
          {/* <Icon
            name="user-circle"
            size={60}
            style={{ color: "blue", marginVertical: 10 }}
          /> */}
          <View style={{ paddingLeft: 20 }}>
            <Image source={require("../../../assets/logo.png")} />
            <Text
              style={{
                textAlign: "left",
                marginTop: 20,
                fontWeight: "bold",
                // color: "#364d81",
              }}
            >
              Sabin Khanal
            </Text>
            <Text
              style={{
                color: "#364d81",
                fontSize: 14,
                fontStyle: "bold",
              }}
              onPress={() => {
                navigation.navigate("Root", { screen: "Profile" });
              }}
            >
              My profile
            </Text>
            <View
              style={{
                height: 1,
                marginTop: 20,
                backgroundColor: "#888",
              }}
            />
          </View>

          <DrawerContentScrollView>
            {/* <DrawerItem
              focused={true}
              icon={({ focused, color, size }) => (
                <Icon
                  color={color}
                  size={size}
                  name={focused ? "heart" : "heart-outline"}
                />
              )}
              label="Help"
              onPress={() => alert("Link to help")}
            /> */}
            <FlatList
              data={[
                { key: "Company", icon: "ios-business" },
                { key: "Authorizations", icon: "ios-shield" },

                { key: "Documents", icon: "ios-document-outline" },
                { key: "Expenses", icon: "ios-cash-outline" },
                { key: "News", icon: "ios-newspaper" },
                { key: "Thanks", icon: "ios-thumbs-up-outline" },
                { key: "Settings", icon: "ios-settings" },
              ]}
              renderItem={({ item }) => (
                <View>
                  <DrawerItem
                    label={item.key}
                    focused={false}
                    icon={({ focused, color, size }) => (
                      <Icon
                        color={colors.primaryColor}
                        size={size}
                        name={item.icon}
                        style={{ color: colors.primaryColor }}
                      />
                    )}
                    onPress={() => {
                      handleMenuClick(item.key);
                    }}
                  ></DrawerItem>
                </View>
              )}
            />
          </DrawerContentScrollView>

          <View
            style={{
              borderBottomColor: "#888",
              borderBottomWidth: 1,
              marginTop: 30,
            }}
          />

          <DrawerItem
            label="Logout"
            icon={({ focused, color, size }) => (
              <Icon
                size={size}
                name={focused ? "airplane" : "airplane-outline"}
                style={{ color: colors.primaryColor }}
              />
            )}
            onPress={() => {
              navigation.navigate("Root", { screen: "LoadingScreen" });
            }}
          ></DrawerItem>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});
