import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Appbar } from "react-native-paper";
import { colors } from "../generic/GlobalStyles";
import { BottomSheetComponent } from "../components/DashboardComponents";
import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Title,
  Row,
  Form,
  Item,
  ActionSheet,
} from "native-base";
import { Picker } from "@react-native-picker/picker";
import { Actions } from "react-native-gifted-chat";

class CalendarItem extends React.Component {
  render() {
    return (
      <View style={this.innerStyle.calendarItem}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="ios-calendar" size={30} color={colors.primaryColor} />
          <View style={{ paddingLeft: 30 }}>
            <Text
              style={{ /*fontSize: 17*/ color: "#32446a", fontWeight: "bold" }}
            >
              Public Holiday
            </Text>
            <Text style={{ fontSize: 14, color: "#32446a" }}>
              New Year's Day
            </Text>
            <Text style={{ fontSize: 14, color: "#666" }}>01 Jan,2021</Text>
          </View>
        </View>
        <View>
          <Icon name="ellipsis-horizontal" />
        </View>
      </View>
    );
  }
  innerStyle = StyleSheet.create({
    calendarItem: {
      padding: 10,

      marginVertical: 10,
      backgroundColor: "#f6f6f8",
      elevation: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 5,
    },
  });
}

export function PlannerComponent({ navigation }) {
  const { language, setLanguage } = useState("java");
  const [isBottomSheetShown, setIsBottomSheetShown] = useState(false);
  var BUTTONS = [
    { text: "Leave Request", icon: "calendar", iconColor: "#2c8ef4" },
    { text: "Other Request", icon: "american-football", iconColor: "#f42ced" },
  ];
  var DESTRUCTIVE_INDEX = 3;
  var CANCEL_INDEX = 4;
  return (
    <View>
      <Header
        androidStatusBarColor="transparent"
        style={{ backgroundColor: "#ee2f32" }}
      >
        <Body>
          <Title style={{ fontSize: 20, fontFamily: "OpenSans-Regular" }}>
            Planner
          </Title>
        </Body>

        <Right>
          <Button
            transparent
            onPress={() => {
              navigation.navigate("Root", { screen: "PlannerFilters" });
            }}
          >
            <Icon name="filter" />
          </Button>
          <Button
            transparent
            onPress={() => {
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "New Request",
                },
                (buttonIndex) => {
                  if (buttonIndex == 0) {
                    navigation.navigate("Root", {
                      screen: "NewHolidayRequestPage",
                    });
                  } else {
                    navigation.navigate("Root", {
                      screen: "NewEventRequestPage",
                    });
                  }
                  // this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              );
              // setIsBottomSheetShown(true);
            }}
          >
            <Icon name="add-circle-outline" />
          </Button>
        </Right>
      </Header>

      <View style={styles.container}>
        <Calendar
          // Collection of dates that have to be marked. Default = {}
          markedDates={{
            "2020-01-31": {
              selected: true,
              marked: true,
              selectedColor: "#ee2f32",
            },
            "2012-05-17": { marked: true },
            "2012-05-18": {
              marked: true,
              dotColor: "#ee2f32",
              activeOpacity: 0,
            },
            "2012-05-19": { disabled: true, disableTouchEvent: true },
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <Text
            style={
              {
                /*fontSize: 17*/
              }
            }
          >
            Month:
          </Text>
          {/* <Picker
            style={{ width: "50%", marginLeft: 10 }}
            selectedValue={language}
            onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
          >
            <Picker.Item label="January 2021" value="java" />
            <Picker.Item label="February 2021" value="js" />
          </Picker> */}
        </View>
        <View>
          <CalendarItem />
          <CalendarItem />
        </View>
        {isBottomSheetShown && (
          <BottomSheetComponent
            list={[
              {
                title: "Request Holiday",
                onPress: () => {
                  setIsBottomSheetShown(false);

                  navigation.navigate("Root", {
                    screen: "NewHolidayRequestPage",
                  });
                },
              },
              {
                title: "Request Other Event",
                onPress: () => {
                  setIsBottomSheetShown(false);

                  navigation.navigate("Root", {
                    screen: "NewEventRequestPage",
                  });
                },
              },
            ]}
            isVisible={isBottomSheetShown}
            onPress={() => {
              setIsBottomSheetShown(false);
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    margin: 20,
  },
});
