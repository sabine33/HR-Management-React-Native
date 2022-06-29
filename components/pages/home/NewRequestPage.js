import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Calendar } from "react-native-calendars";
import { Button, Colors, TextInput, ToggleButton } from "react-native-paper";
import {
  BaseButton,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Input, Form, Item, Label } from "native-base";
import { colors } from "../generic/GlobalStyles";
import { RequestSuccessPage } from "./RequestSuccessPage";

const LessThanADay = ({ title, navigation }) => {
  return (
    <ScrollView style={styles.DayOrMore}>
      <Text style={{ marginVertical: 10 }}>Select Day</Text>
      <Calendar style={{ marginVertical: 10 }} />
      <Text style={{ marginVertical: 10 }}>Date</Text>
      <View style={styles.card}>
        <Text style={{ fontSize: 23, color: Colors.blue600 }}>28</Text>
        <Text style={{ /*fontSize: 17*/ color: Colors.blue600 }}>Jan</Text>
      </View>
      <Text style={{ marginVertical: 10 }}>Select part of day</Text>
      <View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              backgroundColor: "#2e93d9",
              padding: 10,
              color: "#fff",
              textAlign: "center",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              elevation: 10,
            }}
          >
            <Ionicons name="ios-sunny" color="#fff" size={30}></Ionicons>
            <Text style={{ color: "#fff" }}>AM</Text>
          </View>

          <View
            style={{
              width: "50%",
              flexDirection: "row",
              padding: 10,
              color: "#ddd",
              textAlign: "center",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-moon" color="#ddd" size={30}></Ionicons>
            <Text style={{ color: "#ddd" }}>PM</Text>
          </View>
        </View>
        <Text style={{ marginVertical: 10 }}>Duration</Text>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="ios-remove-circle"
            color="#000"
            size={40}
            style={{
              backgroundColor: "#fff",
              padding: 20,
            }}
          ></Ionicons>
          <Text style={{ fontSize: 30 }}>0.5</Text>
          <Ionicons
            name="ios-add-circle"
            color="#000"
            size={40}
            style={{
              backgroundColor: "#fff",
              padding: 20,
            }}
          ></Ionicons>
        </View>
        <Item stackedLabel>
          <Text>Events</Text>
          <Input
            placeholder="Events"
            style={{ color: "#ddd", fontFamily: "OpenSans-Light" }}
          />
        </Item>
      </View>
      <ApplyNowButton navigation={navigation} />
    </ScrollView>
  );
};

const DayOrMore = ({ title, navigation }) => {
  return (
    <ScrollView style={styles.DayOrMore}>
      <Text style={{ marginVertical: 10 }}>Select start date and end date</Text>
      <Calendar />
      <Text style={{ marginVertical: 10 }}>Start Date</Text>
      <View style={styles.card}>
        <Text style={{ fontSize: 23, color: Colors.blue600 }}>28</Text>
        <Text style={{ /*fontSize: 17*/ color: Colors.blue600 }}>Jan</Text>
      </View>
      <Text style={{ marginVertical: 10 }}>End Date</Text>
      <View style={styles.card}>
        <Text style={{ fontSize: 23, color: Colors.blue600 }}>28</Text>
        <Text style={{ /*fontSize: 17*/ color: Colors.blue600 }}>Jan</Text>
      </View>
      <Text style={{ marginVertical: 10 }}>Total Duration</Text>
      <View
        style={[styles.card, { flexDirection: "row", alignItems: "center" }]}
      >
        <Text style={{ fontSize: 25, color: Colors.blue600 }}>1</Text>
        <Text style={{ /*fontSize: 17*/ color: Colors.blue600 }}>day </Text>
      </View>
      <Text style={{ marginVertical: 10 }}>Comments</Text>
      <View>
        <Input
          placeholder="Comments"
          placeholderTextColor="#ddd"
          style={{ backgroundColor: "#fff", elevation: 2, color: "#222" }}
        />
      </View>
      <ApplyNowButton navigation={navigation} />
    </ScrollView>
  );
};

function ApplyNowButton({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.secondary,
        color: "#fff",
        padding: 10,
        margin: 30,
        borderRadius: 17,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "#fff",
        }}
        onPress={() => {
          // setIsVisible(true);
          navigation.navigate("Root", { screen: "RequestSuccessPage" });
        }}
      >
        Apply Now
      </Text>
    </TouchableOpacity>
  );
}

const Tab = createMaterialTopTabNavigator();

export class NewRequestPage extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="A DAY OR MORE">
          {(props) => (
            <DayOrMore {...props} navigation={this.props.navigation} />
          )}
        </Tab.Screen>
        <Tab.Screen name="LESS THAN A DAY">
          {(props) => (
            <LessThanADay {...props} navigation={this.props.navigation} />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    elevation: 3,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  DayOrMore: {
    padding: 20,
    backgroundColor: "#fafafa",
    color: Colors.blue600,
    flex: 1,
  },
  container: {
    backgroundColor: "#fafafa",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  toggleButton: {
    color: "#fff",
    backgroundColor: Colors.blue600,
    padding: 15,
    borderRadius: 60,
    elevation: 10,
    width: "50%",
  },
});
