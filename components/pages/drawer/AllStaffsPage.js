import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { randomColor, textStyleTheme } from "../generic/GlobalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
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
            /*fontSize: 17*/
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

export function AllStaffsPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Company" });
  }, []);

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <AllEmployeeComponent navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
