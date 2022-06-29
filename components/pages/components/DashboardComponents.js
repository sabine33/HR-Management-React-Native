import React from "react";
import { View, Text } from "react-native";
import { BottomSheet, CheckBox, ListItem } from "react-native-elements";

export function BottomSheetComponent({ list, isVisible }) {
  // let [isVisible, setIsVisible] = useState(true);

  return (
    <View>
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
      >
        {list.map((l, i) => (
          <ListItem key={i} onPress={() => l.onPress()} bottomDivider={true}>
            <ListItem.Content style={{}}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: 1,
                  padding: 0,
                  margin: 0,
                }}
              >
                <Text style={{ flex: 1 }}>{l.title}</Text>
                <CheckBox />
              </View>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </View>
  );
}

export function HomePageHeader({}) {
  return (
    <View
      style={{
        backgroundColor: "#324468",
        height: "auto",
        padding: 20,
      }}
    >
      <Text style={{ color: "#fff", marginTop: 30, fontSize: 20 }}>
        Hi Sabin !
      </Text>
      <Text style={{ color: "#fff", marginTop: 10 /*fontSize: 17*/ }}>
        Here's whats happening today
      </Text>
    </View>
  );
}

export function HomePageThanksWidget({}) {
  return (
    <View>
      <Text>Welcome to thanks widgets</Text>
    </View>
  );
}

export function HomepageNewsWidget({}) {
  return <View></View>;
}

export function HomepageTapinTapoutWidget({}) {
  return <View></View>;
}

export function HomepageUpcomingBirthdayWidget({}) {
  return <View></View>;
}

export function HomepageDoubleCardWidget({}) {
  return <View></View>;
}
export function HomepageHolidaysWidget({}) {
  return <View></View>;
}

export function HomepageExpenseWidget() {
  return <View></View>;
}
export function HomepageEditWidget() {
  return <View></View>;
}
