import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
// import { HeaderBar } from "../generic";
import { MenuItem } from "../generic/MenuItem";

export function LogBookPage({ props, navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Logbook",
    });
  }, []);
  const items = [
    {
      title: "1-2-1's",
      onPress: () => {
        navigation.navigate("Root", { screen: "OneTwoOnePage" });
      },
    },
    {
      title: "Appraisal",
      onPress: () => {
        navigation.navigate("Root", {
          screen: "AppraisalPage",
        });
      },
    },
    {
      title: "Benefit",
      onPress: () => {
        navigation.navigate("Root", {
          screen: "BenefitPage",
        });
      },
    },

    {
      title: "Continious Professional Development",
      onPress: () => {
        navigation.navigate("Root", {
          screen: "CPDPage",
        });
      },
    },

    {
      title: "Driving License",
      onPress: () => {
        navigation.navigate("Root", {
          screen: "DrivingLicensePage",
        });
      },
    },

    {
      title: "Objectives",
      onPress: () => {
        navigation.navigate("Root", {
          screen: "ObjectivesPage",
        });
      },
    },
    {
      title: "Qualification",
      onPress: () => {
        navigation.navigate("Root", {
          screen: "QualificationPage",
        });
      },
    },
    {
      title: "Training",
      onPress: () => {
        navigation.navigate("Root", {
          screen: "TrainingsPage",
        });
      },
    },

    {
      title: "Vehicle Details",
      onPress: () => {
        navigation.navigate("Root", {
          screen: "VehicleForm",
        });
      },
    },
  ];

  return (
    <View style={styles.container}>
      {items.map((x) => {
        return <MenuItem title={x.title} key={x.title} onPress={x.onPress} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
});
