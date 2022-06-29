import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native-paper";

export function EmergencyContactPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/emg.png")} />
      <Text
        style={{
          /*fontSize: 17*/
          color: Colors.blue600,
        }}
      >
        No Emergency Contacs added yet
      </Text>

      <View
        style={{
          width: "90%",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              textAlign: "center",
              /*fontSize: 17*/
              color: "#fff",
            }}
            onPress={() => {
              navigation.navigate("Root", {
                screen: "EmergencyContactForm",
              });
            }}
          >
            Add New
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#f98d4c",
    padding: 15,
    borderRadius: 10,
    elevation: 10,
    marginTop: 100,
    textAlign: "center",
  },
});
