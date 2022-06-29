import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../generic";
import { RadioButton } from "react-native-paper";
import { colors } from "../generic/GlobalStyles";

const NewChatPage = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.primaryColor,
      },
      headerRight: () => (
        <Text
          style={{ color: "#fff", paddingHorizontal: 20, fontWeight: "bold" }}
          onPress={() => {
            navigation.navigate("Root", { screen: "ChatPage" });
          }}
        >
          Done
        </Text>
      ),
    });
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Text style={GlobalStyles.circleChatText}>AA</Text>
        <Text
          style={{
            paddingRight: 100,
          }}
        >
          Ram Bahadur
        </Text>
        <View style={{}}>
          <RadioButton status="checked" />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={GlobalStyles.circleChatText}>AA</Text>
        <Text
          style={{
            paddingRight: 100,
          }}
        >
          Hari Bahadur
        </Text>
        <View style={{}}>
          <RadioButton status="" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderTopColor: "#ddd",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    marginHorizontal: 10,
    padding: 10,
  },
});
export default NewChatPage;
