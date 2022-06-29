import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Appbar, Button, Checkbox } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
// import ToggleBox from "react-native-show-hide-toggle-box";
import AnimatedHideView from "react-native-animated-hide-view";
import { GlobalStyles } from "../generic";
import { colors, fonts } from "../generic/GlobalStyles";
import { SafeAreaView } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

// ...
// var quality = ["720p", "480p", "360p", "240p"];
// var items = ["Quality"];
// //or
// items = [{title: "Quality"}, {title: "Closed Captions", icon: require('./img/cc.png')}];
// //or
// items = ["Quality", {title: "Closed Captions", icon: require('./img/cc.png')}];
// BottomDialog.show({
//     items
// }, () => {
//     BottomDialog.show({
//         title: 'Select quality', //It will not show title if title is empty
//         items: quality, //It will not show dialog if items is empty
//         canceledOnTouchOutside: true, // close dialog if touch outside, default: true
//         cancelable: true // close dialog if press "Back" or touch outside, default: true
//     }, (selected) => { // onPress callback, return position of selected item
//         console.log(quality[selected]);
//     });
// });

function child({ title }) {
  return (
    <View>
      <Checkbox />
    </View>
  );
}
function ChildComponent() {
  let checked = true;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View style={{}}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {}}
        />
      </View>
      <Text
        style={{
          fontSize: 14,
          paddingLeft: 40,
          color: colors.primaryColor,
        }}
      >
        Company Name
      </Text>
    </View>
  );
}

function ToggleComponent({ navigation, title }) {
  const [isChildVisible, setIsChildVisible] = useState(false);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          marginTop: 10,
          borderBottomWidth: 2,
          borderBottomColor: "#ddd",
        }}
      >
        <Text
          style={{
            fontSize: 14,
          }}
        >
          {title}
        </Text>
        <Ionicons
          name="ios-chevron-down"
          size={30}
          onPress={() => {
            setIsChildVisible(isChildVisible == true ? false : true); // isChildVisible);
          }}
        ></Ionicons>
      </View>
      <View>
        {isChildVisible && (
          <View>
            <ChildComponent />
            <ChildComponent />
          </View>
        )}
      </View>
    </View>
  );
}

function Pills({ titles }) {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 0,
        marginBottom: 10,
      }}
    >
      {titles.map((x) => {
        return (
          <Text
            style={{
              backgroundColor: colors.secondary,
              marginRight: 5,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 5,
              paddingBottom: 5,
              color: "#fff",
              borderRadius: 10,
            }}
          >
            {x}
          </Text>
        );
      })}
    </View>
  );
}

export function FiltersPage({ navigation }) {
  useEffect(() => {
    // navigation.setOptions({
    //   headerTitle: "Filters",
    // });
  }, []);

  return (
    <ScrollView>
      <Appbar.Header style={{ backgroundColor: colors.primaryColor }}>
        <Appbar.BackAction />
        <Appbar.Content
          title="Filters"
          titleStyle={
            {
              /*fontSize: 17*/
            }
          }
        />
        <Appbar.Content
          title="Clear All"
          titleStyle={{ fontSize: 14, textAlign: "right" }}
        />
      </Appbar.Header>

      <View style={styles.container}>
        <Pills titles={["Project A", "Project B", "Project C"]} />

        <Text style={{ fontSize: 14 }}>Quick Filter</Text>
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            color="#fff"
            labelStyle={styles.labelStyle}
          >
            My planner
          </Button>
          <Button
            style={styles.button}
            color="#fff"
            labelStyle={styles.labelStyle}
          >
            Company Planner
          </Button>
          <Button
            style={styles.button}
            color="#fff"
            labelStyle={styles.labelStyle}
          >
            Pending Requests
          </Button>
        </View>
        <View style={styles.filterList}></View>
        <ToggleComponent title="Company" />
        <ToggleComponent title="Location" />
        <ToggleComponent title="Department" />

        <TouchableOpacity style={styles.applyButton}>
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
              textAlign: "center",
            }}
          >
            Apply Filters
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    color: "white",
    fontSize: 10,
  },
  container: {
    padding: 20,
    margin: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#f98d4c",
    marginTop: 5,
    marginRight: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  filterList: {
    marginVertical: 20,
  },
  applyButton: {
    elevation: 10,
    backgroundColor: "#33456d",
    marginTop: 100,
    padding: 20,
    borderRadius: 20,
  },
});
