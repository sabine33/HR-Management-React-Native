import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

export function AppraisalPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: "AppraisalPage" });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../../../assets/not_found.png")}
        style={{
          width: 500,
        }}
      ></Image>
      <Text
        style={{
          /*fontSize: 17*/
          paddingTop: 70,
        }}
      >
        No Records Found
      </Text>
      <Button
        style={{
          backgroundColor: "#f98d4c",
          marginTop: 50,
          padding: 5,
        }}
        color="#fff"
        width="80%"
        onPress={() => {
          navigation.navigate("Root", {
            screen: "AppraisalForm",
          });
        }}
      >
        Create New
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
