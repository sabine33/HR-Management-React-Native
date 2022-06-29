import { StatusBar } from "expo-status-bar";
import { Body, Header, Icon, Left, Right, Title } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Ionicon from "react-native-vector-icons/FontAwesome";
import { HeaderBar } from "../generic";
import { colors } from "../generic/GlobalStyles";
class ProfileHeader extends React.Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: "#324264", height: 250 }}>
          <View
            style={{
              padding: 20,
              width: 100,
              height: 100,
              backgroundColor: "#e57373",
              alignSelf: "center",
              marginTop: 30,
              borderRadius: 90,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 35,
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              SK
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "300", fontSize: 18 }}>
              Sabin Khanal
            </Text>
            <Text style={{ color: "#fff", fontWeight: "200" }}>PAYROLL</Text>
            <View style={{ flexDirection: "row" }}>
              <Ionicon
                name="home"
                size={20}
                style={{ marginRight: 10 }}
                color="#fff"
              />

              <Text style={{ color: "#fff", fontWeight: "100", fontSize: 14 }}>
                Head Office
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class ProfileSummary extends React.Component {
  render() {
    return (
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#fff",
          elevation: 10,
          marginTop: 0,
        }}
      >
        <View>
          <Text
            style={{ fontWeight: "bold", fontSize: 14, alignSelf: "center" }}
          >
            1 Mo
          </Text>
          <Text>LOS</Text>
        </View>
        <View>
          <Text
            style={{ fontWeight: "bold", fontSize: 14, alignSelf: "center" }}
          >
            0 Days
          </Text>
          <Text>Absenses</Text>
        </View>
        <View>
          <Text
            style={{ fontWeight: "bold", fontSize: 14, alignSelf: "center" }}
          >
            12 days
          </Text>
          <Text>Remaining</Text>
        </View>
      </View>
    );
  }
}

function MenuCard({ navigation, title, icon }) {
  const handlePress = (title) => {
    // console.log(title);
    // alert(title);
    // console.log(this.props);
    if (title == "Information") {
      navigation.push("InformationPage");
    } else if (title == "Planner") {
      navigation.push("Planner");
    } else if (title == "Logbook") {
      alert("clicked");
      navigation.push("LogbookPage");
    } else if (title == "Documents") {
      navigation.push("DocumentsPage");
    } else {
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 20,
        margin: 20,
        marginTop: 5,
        marginBottom: 5,
        elevation: 10,
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Ionicon name={icon} size={30} color="#324263" />
      <Text
        style={{
          fontSize: 14,
          paddingLeft: 30,
          textAlign: "left",
          color: "#324263",
          width: "80%",
        }}
        onPress={() => {
          handlePress(title);
        }}
      >
        {title}
      </Text>
      <Ionicon name="angle-right" size={35} />
    </View>
  );
}

class ProfileMenus extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <MenuCard
          title="Information"
          icon="info"
          navigation={this.props.navigation}
        />
        <MenuCard
          title="Planner"
          icon="calendar"
          navigation={this.props.navigation}
        />
        <MenuCard
          title="Logbook"
          icon="sticky-note-o"
          navigation={this.props.navigation}
        />
        <MenuCard
          title="Documents"
          icon="file-pdf-o"
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
export class ProfilePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={colors.primaryColor}></StatusBar> */}
        <View style={{ paddingTop: 0 }}>
          <ProfileHeader />
          <ProfileSummary />
          <ProfileMenus navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
});
