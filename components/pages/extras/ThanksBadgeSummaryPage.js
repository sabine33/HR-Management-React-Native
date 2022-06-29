import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { Icon, Thumbnail } from "native-base";
import { colors, fonts, randomColor } from "../generic/GlobalStyles";
import { THUMB_URL } from "../../../helpers";

export class ThanksBadgeSummaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({ headerTitle: "Summary" });
  }
  render() {
    return (
      <View
        style={{
          margin: 20,
          flex: 1,
          backgroundColor: "#f2f2f2",
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Badge
          </Text>
          <View
            style={{
              backgroundColor: "#fff",
              elevation: 10,
              flexDirection: "row",
              padding: 10,
              alignItems: "center",

              marginVertical: 10,
            }}
          >
            <Icon
              name="trophy"
              size={40}
              style={{ paddingRight: 20, color: colors.primaryColor }}
            />
            <Text style={{ fontFamily: "OpenSans-Light" }}>Ambassador</Text>
          </View>
        </View>
        <Text>Employee</Text>
        {[1, 2, 3].map((x) => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
                elevation: 10,
                backgroundColor: "#fff",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Thumbnail
                  source={{ uri: THUMB_URL }}
                  resizeMode="center"
                  size={30}
                  style={{ marginRight: 20 }}
                />
                <View>
                  <Text style={{ fontSize: 15, color: colors.secondary }}>
                    Limoli Patta
                  </Text>
                  <Text>Sales External</Text>
                </View>
              </View>

              <Icon
                name="close-circle"
                size={20}
                style={{ color: colors.secondary }}
              />
            </View>
          );
        })}
        <Text
          style={{
            paddingVertical: 20,
          }}
        >
          Write a message
        </Text>
        <TextInput
          placeholder="Write a message"
          multiline={true}
          numberOfLines={4}
          underlineColor="#ddd"
          style={{
            backgroundColor: "#fff",
          }}
        />

        <TouchableOpacity
          style={{
            elevation: 10,
            padding: 15,
            backgroundColor: colors.secondary,
            margin: 15,
            marginTop: 50,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 14,
            }}
            onPress={() => {
              this.props.navigation.navigate("Root", {
                screen: "ThanksBadgeSuccessPage",
              });
            }}
          >
            Send a thanks badge
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
