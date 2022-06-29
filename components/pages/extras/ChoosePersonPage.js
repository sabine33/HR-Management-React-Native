import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Checkbox, TextInput } from "react-native-paper";
import { randomColor, textStyleTheme } from "../generic/GlobalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";

function SingleEmployee({ navigation }) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "#ddd",
        borderBottomWidth: 2,
        justifyContent: "space-between",
        padding: 10,
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
        <Checkbox
          status={isSelected ? "checked" : "unchecked"}
          onPress={() => {
            setSelection(!isSelected);
          }}
        />
      </Text>
    </View>
  );
}
function AllEmployeeComponent({ navigation }) {
  return [1, 2, 3, 4].map((x) => {
    return <SingleEmployee navigation={navigation} key={x} />;
  });
}

export function ChoosePersonPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Choose a Person",
      headerRight: () => (
        <Ionicons
          name="ios-chevron-forward"
          onPress={() => {
            navigation.navigate("Root", { screen: "ThanksBadgeSummaryPage" });
          }}
          title="Info"
          color="#fff"
          size={30}
          style={{ paddingRight: 20 }}
        />
      ),
    });
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
