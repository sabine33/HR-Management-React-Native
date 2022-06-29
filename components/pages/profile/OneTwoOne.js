import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export function OneTwoOne({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ title: "1-2-1's" });
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
