import { StatusBar } from "expo-status-bar";
import { Header, Body, Title, Thumbnail, Left, Right } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { THUMB_URL } from "../../../helpers";
import { randomColor } from "../generic/GlobalStyles";

function SingleEmployee({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "#ddd",
        borderBottomWidth: 2,
        justifyContent: "space-between",
        padding: 10,
        marginTop: 20,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 40,
          height: 40,
          backgroundColor: randomColor(Math.random()),
          borderRadius: 90,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          AB
        </Text>
      </View>

      <View
        style={{
          paddingRight: 120,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
          }}
          onPress={() => {
            navigation.navigate("Root", { screen: "StaffPage" });
          }}
        >
          Aabhar Bikram
        </Text>
        <Text>Payroll</Text>
      </View>
      <Text>
        <Ionicons name="ios-chevron-forward" size={30} />
      </Text>
    </View>
  );
}
function AllEmployeeComponent({ navigation }) {
  return [1, 2, 3, 4].map((x) => {
    return <SingleEmployee navigation={navigation} key={x} />;
  });
}

function CardBucket({ navigation }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text
          style={styles.cardCircleText}
          onPress={() => {
            navigation.navigate("Root", { screen: "AllStaffs" });
          }}
        >
          SP
        </Text>
        <Text style={styles.cardText}>Administration</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardCircleText}>SP</Text>
        <Text style={styles.cardText}>Administration</Text>
      </View>
    </View>
  );
}

function CardBucketJobRoles({}) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.cardCircleText}>SP</Text>
        <Text style={styles.cardText}>Accountant</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardCircleText}>SP</Text>
        <Text style={styles.cardText}>Administration</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardCircleText}>SP</Text>
        <Text style={styles.cardText}>Payroll</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardCircleText}>SP</Text>
        <Text style={styles.cardText}>Sales</Text>
      </View>
    </View>
  );
}

export function CompanyPage({ navigation }) {
  let [mode, setMode] = useState("Department");

  return (
    <View style={styles.container}>
      {/* <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header> */}
      {/* <StatusBar backgroundColor="transparent" animated={true}></StatusBar> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: mode == "Department" ? "#2e93d9" : "#776",
            margin: 10,
          }}
        >
          <Text
            style={styles.textStyle}
            onPress={() => {
              setMode("Department");
            }}
          >
            Department
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: mode == "Job Role" ? "#2e93d9" : "#776",
            margin: 10,
          }}
        >
          <Text
            style={styles.textStyle}
            onPress={() => {
              setMode("Job Role");
            }}
          >
            Job Role
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: mode == "All Employees" ? "#2e93d9" : "#776",
            margin: 10,
          }}
        >
          <Text
            style={styles.textStyle}
            onPress={() => {
              setMode("All Employees");
            }}
          >
            All Employees
          </Text>
        </TouchableOpacity>
      </View>
      {mode == "Department" && <CardBucket navigation={navigation} />}
      {mode == "Job Role" && <CardBucketJobRoles navigation={navigation} />}

      {mode == "All Employees" && (
        <AllEmployeeComponent navigation={navigation} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  card: {
    flex: 1,
    minWidth: "40%",
    backgroundColor: "#fff",
    elevation: 10,
    alignItems: "center",
    margin: 10,
  },
  cardText: {
    textAlign: "center",
    paddingBottom: 20,
    fontSize: 14,
  },
  cardCircleText: {
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "red",
    borderRadius: 90,
    justifyContent: "center",
    height: 60,
    width: 60,
    padding: 20,
    margin: 10,
    lineHeight: 20,
    color: "#fff",
  },
  textStyle: {
    color: "#fff",
    fontSize: 14,
    padding: 8,
  },
});
