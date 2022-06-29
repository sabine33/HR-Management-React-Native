import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Calendar } from "react-native-calendars";
import { Button, Colors, TextInput, ToggleButton } from "react-native-paper";

import {
  RawButton,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Icon } from "native-base";
import { Picker } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "../generic/GlobalStyles";

const DaysComponent = ({ title, navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
      }}
    >
      <View
        style={{
          padding: 10,
          paddingVertical: 10,
          backgroundColor: "#fff",
        }}
      >
        <Picker
          style={{
            width: "100%",
            color: Colors.red100,
          }}
          selectedValue="java"
        >
          <Picker.Item label="Choose a reason" value="java" />
          <Picker.Item label="US Dollar" value="js" />
        </Picker>
      </View>
      <Text style={{ paddingVertical: 10, marginVertical: 10 }}>
        Select start and end date
      </Text>
      <Calendar />
      <Text style={{ paddingVertical: 10, marginVertical: 10 }}>
        Start Date
      </Text>
      <View style={styles.card}>
        <Text style={{ fontSize: 25, color: Colors.blue600 }}>28</Text>
        <Text style={{ /*fontSize: 17*/ color: Colors.blue600 }}>Jan</Text>
      </View>
      <Text style={{ paddingVertical: 10, marginVertical: 10 }}>End Date</Text>
      <View style={styles.card}>
        <Text style={{ fontSize: 25, color: Colors.blue600 }}>28</Text>
        <Text style={{ /*fontSize: 17*/ color: Colors.blue600 }}>Jan</Text>
      </View>
      <Text style={{ paddingVertical: 10, marginVertical: 10 }}>Comments</Text>
      <View>
        <TextInput
          placeholder="Comments"
          style={{ backgroundColor: "#fff", elevation: 10 }}
        />
      </View>
      <ApplyNowButton navigation={navigation} />
    </ScrollView>
  );
};

const HoursComponent = ({ title, navigation }) => {
  return (
    <ScrollView style={{ padding: 20 }}>
      <View>
        <View
          style={{
            padding: 20,
            paddingVertical: 10,
            backgroundColor: "#fff",
          }}
        >
          <Picker
            style={{
              width: "100%",
              color: Colors.lightBlue800,
            }}
            selectedValue="java"
          >
            <Picker.Item label="Choose a reason" value="java" />
            <Picker.Item label="US Dollar" value="js" />
          </Picker>
        </View>

        <Text style={{ marginVertical: 10 }}>Select date</Text>
        <Calendar />
        <Text style={{ marginVertical: 10 }}> Date</Text>
        <View style={styles.card}>
          <Text style={{ fontSize: 25, color: Colors.blue600 }}>28</Text>
          <Text style={{ /*fontSize: 17*/ color: Colors.blue600 }}>jan</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={{ marginVertical: 10 }}>From</Text>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
                backgroundColor: "#fff",
                alignItems: "center",
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 30, color: "#ddd" }}>0.00</Text>
              <Icon name="ios-time-outline" size={30}></Icon>
            </View>
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={{ marginVertical: 10 }}>To</Text>

            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
                backgroundColor: "#fff",
                alignItems: "center",
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 30, color: "#ddd" }}>0.00</Text>
              <Icon name="ios-time-outline" size={30}></Icon>
            </View>
          </View>
        </View>
        <Text style={{ marginVertical: 20 }}>Duration</Text>
        <Text
          style={{
            fontSize: 30,
            color: "#ddd",
            backgroundColor: "#fff",
            paddingHorizontal: 20,
          }}
        >
          0.00
        </Text>
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

export class NewEventPage extends React.Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: "New Event",
    });
  }
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="DAYS">
          {(props) => (
            <DaysComponent
              {...props}
              title="HI"
              navigation={this.props.navigation}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="HOURS">
          {(props) => (
            <HoursComponent
              {...props}
              title="HI"
              navigation={this.props.navigation}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 10,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  DayOrMore: {
    backgroundColor: "#fafafa",
    color: Colors.blue600,
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
    borderRadius: 60,
    elevation: 10,
    width: "50%",
  },
});
