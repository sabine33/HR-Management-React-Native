import React, { useState, useCallback } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { colors, fonts } from "../generic/GlobalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";

import Menu, {
  MenuProvider,
  MenuTrigger,
  MenuOptions,
  MenuOption,
  renderers,
  SlideInMenu,
} from "react-native-popup-menu";
import { BottomSheet, ListItem } from "react-native-elements";
import { Checkbox } from "react-native-paper";
const NUM_ITEMS = 10;

function getColor(i) {
  const multiplier = 255 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

function BottomSheetComponent({ props, isVisible, setIsVisible }) {
  const list = [
    { title: "List Item 1" },
    { title: "List Item 2" },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "#ddd" },
      titleStyle: { color: "white" },
      onPress: () => {
        setIsVisible(false);
      },
    },
  ];

  return (
    <BottomSheet
      isVisible={isVisible}
      containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
    >
      {list.map((l, i) => (
        <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
          <ListItem.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <Text style={{ flex: 1 }}>{l.title}</Text>
              <Checkbox />
            </View>
            {/* <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title> */}
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
  );
}

const _data = [
  {
    key: 1,
    label: "News",
  },
  {
    key: 2,
    label: "Thanks",
  },
  {
    key: 3,
    label: "Expense Overview",
  },
  {
    key: 4,
    label: "My Upcoming Holidays",
  },
  {
    key: 5,
    label: "Authorizations",
  },
  {
    key: 6,
    label: "Quick Action",
  },
  {
    key: 7,
    label: "New Pulse",
  },
  {
    key: 8,
    label: "Holiday Entitlement Summary",
  },
];

const exampleData = [...Array(20)].map((d, index) => {
  const backgroundColor = getColor(index);
  return {
    key: `item-${backgroundColor}`,
    label: String(index),
    backgroundColor,
  };
});

function EditWidgetsPage() {
  const [data, setData] = useState(_data);

  const renderItem = useCallback(({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        style={{
          //   backgroundColor: isActive ? "#ee2f32" : item.backgroundColor,
          padding: 15,
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          flexDirection: "row",
        }}
        onLongPress={drag}
      >
        <Text
          style={{
            fontSize: 14,
            color: "black",
          }}
        >
          {item.label}
        </Text>
        <Ionicons
          name="ellipsis-vertical-outline"
          style={{ color: colors.primaryColor /*fontSize: 17*/ }}
        ></Ionicons>
      </TouchableOpacity>
    );
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <DraggableFlatList
        style={{
          margin: 10,
        }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => setData(data)}
      />

      <BottomSheetComponent isVisible={isVisible} setIsVisible={setIsVisible} />

      <TouchableOpacity
        style={{
          backgroundColor: colors.secondary,
          color: "#fff",
          padding: 10,
          margin: 30,
          borderRadius: 17,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: fonts.small,
          }}
          onPress={() => {
            setIsVisible(true);
          }}
        >
          Apply Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default EditWidgetsPage;
