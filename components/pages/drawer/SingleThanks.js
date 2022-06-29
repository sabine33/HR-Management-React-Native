import React, { useEffect } from "react";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { colors, fonts } from "../generic/GlobalStyles";

import { Icon, Thumbnail, Row, Card } from "native-base";
import { THUMB_URL } from "../../../helpers";
export function SingleThanks({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
    });
  }, []);
  return (
    <KeyboardAvoidingView
      style={{
        padding: 10,
        backgroundColor: "#fafafa",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View
          style={{
            backgroundColor: "#fff",
            padding: 20,
            margin: 10,
            elevation: 10,
          }}
        >
          <View
            style={{
              justifyContent: "center",
            }}
          >
            {/* <Image
        source={require("../../../assets/ic_thanks_notification.png")}
        style={{ alignSelf: "center" }}
        resizeMode="contain"
        width="40"
      /> */}
            <Icon
              name="trophy"
              style={{
                alignSelf: "center",
                paddingVertical: 20,
                fontSize: 40,
                color: colors.primaryColor,
              }}
              onPress={() => {
                navigation.navigate("Root", { screen: "SingleThanks" });
              }}
            />
            <Text
              style={{
                textAlign: "center",
                color: "#344771",
                fontWeight: "bold",
                /*fontSize: 17*/
                paddingBottom: 15,
              }}
            >
              Ambassador
            </Text>
            <Text style={{ textAlign: "center", paddingVertical: 10 }}>
              You sent a 'Thanks' badge to Sabin Khanal.
            </Text>
            <Text
              style={{
                textAlign: "center",
                paddingBottom: 30,
                fontSize: 11,
              }}
            >
              Just Now
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 14 }}>1 Like</Text>
              <View
                style={{
                  width: 2,
                  backgroundColor: "#ddd",
                  marginHorizontal: 10,
                }}
              />
              <Text style={{ fontSize: 14 }}>0 Comments</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="heart"
                size={30}
                style={{ color: colors.primaryColor }}
              />
              <Icon
                name="chatbubble"
                size={30}
                style={{ paddingLeft: 20, color: colors.primaryColor }}
              />
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ paddingVertical: 10 }}>Comments:</Text>
          <Card
            style={{
              flexDirection: "row",
              margin: 25,
              padding: 10,
              elevation: 3,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Thumbnail
              source={{ uri: THUMB_URL }}
              resizeMode="center"
              size={30}
            />
            <Text
              style={{
                width: "80%",
              }}
            >
              I am grateful to get this message . thanks
            </Text>
          </Card>
        </View>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            elevation: 10,
          }}
        >
          <TextInput
            placeholder="Type a comment"
            style={{
              backgroundColor: "#fff",
              borderRadius: 20,
            }}
          />
        </View>
        <Icon
          name="chevron-forward"
          color={colors.secondary}
          size={20}
          style={{
            backgroundColor: colors.secondary,
            padding: 10,
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 90,
            marginLeft: 10,
            elevation: 10,
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {},
});
