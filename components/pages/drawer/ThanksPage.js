import { Icon } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import { colors } from "../generic/GlobalStyles";

function ThanksBadge({ navigation }) {
  return (
    <View style={styles.card}>
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
          size={80}
          style={{
            alignSelf: "center",
            paddingVertical: 20,
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
            paddingVertical: 10,
            fontWeight: "bold",
          }}
        >
          07:12 AM
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
          <Icon name="heart" size={25} style={{ color: colors.primaryColor }} />
          <Icon
            name="chatbubble"
            size={25}
            style={{ paddingLeft: 20, color: colors.primaryColor }}
          />
        </View>
      </View>
    </View>
  );
}
export class ThanksPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <Icon
          onPress={() => {
            this.props.navigation.navigate("Root", { screen: "ThanksBadge" });
          }}
          name="add-circle"
          size={25}
          style={{ paddingRight: 30, color: "#fff" }}
        />
      ),
    });
    // this.props.navigation.navigate("Root", { screen: "ThanksBadge" });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {[1, 2, 3].map((x) => {
          return <ThanksBadge key={x} navigation={this.props.navigation} />;
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
  },
  card: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    elevation: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
