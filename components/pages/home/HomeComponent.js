import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

import { Component } from "react";
import { colors, fonts, images } from "../generic/GlobalStyles";

import CardStack, { Card } from "react-native-card-stack-swiper";
import { TapInTapOut } from "./TapInTapOut";
import { Dimensions } from "react-native";
// import EditWidgetsPage from "./EditWidgetsPage";

function HomepageHeader() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: colors.primaryColor,
        paddingVertical: 30,
      }}
    >
      <Text
        style={{
          fontSize: fonts.small,
          color: "#fff",
        }}
      >
        Hi Sabin
      </Text>
      <Text
        style={{
          fontSize: fonts.tiny,
          color: "#fff",
        }}
      >
        Here's whats happening today.
      </Text>
    </View>
  );
}

export function NewsItem({ navigation, news }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon name="user-circle" size={25} />
        <View style={{ marginHorizontal: 15, justifyContent: "center" }}>
          <Text>Eliza Khanal</Text>
          <Text>10:24AM</Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            padding: 5,
            textAlign: "justify",
          }}
        >
          She's one of Europe's most powerful women. A vaccine spat could derail
          her big plans for the continent. It's likely that, a couple of weeks
          ago, you'd never heard the name Ursula von der Leyen.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: colors.primaryColor,
            marginHorizontal: 10,
          }}
        >
          20
        </Text>
        <Icon name="heart" size={15} color="#ee2f32" />
        <Text style={{ marginHorizontal: 10 }}>5</Text>
        <Icon name="comment" size={15} color="#ee2f32" style={{ padding: 5 }} />
      </View>
    </View>
  );
}

export function NewsWidget({ newsList }) {
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text>News</Text>
          <Text>View All</Text>
        </View>
        <View style={{}}>
          <CardStack
            disableBottomSwipe={true}
            disableTopSwipe={true}
            ref={(swiper) => {}}
            disableBottomSwipe={true}
            disableTopSwipe={true}
            disableRightSwipe={true}
            renderNoMoreCards={() => false}
            cardContainerStyle={{}}
            style={{
              flexGrow: 1,
              backgroundColor: "#fff",
              elevation: 5,
              height: 210,
            }}
          >
            {[1, 2, 3, 4, 5].map((x) => {
              return (
                <Card
                  style={{
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                  }}
                  key={x}
                >
                  <NewsItem />
                </Card>
              );
            })}
          </CardStack>
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;

export function ThanksItem({ navigation, news }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        justifyContent: "space-around",
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: windowWidth - 40,
        elevation: 5,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          name="angellist"
          size={50}
          color="#ee2f32"
          style={{
            marginVertical: 10,
          }}
        />
        <Text style={{ /*fontSize: 17*/ marginVertical: 5 }}>Ambassador</Text>
        <Text>You sent a thanks badge to aabhar bikram</Text>
        <Text>28/01/2021</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{}}>1 Like</Text>
          <View
            style={{ width: 4, backgroundColor: "#ddd", marginHorizontal: 10 }}
          />

          <Text> 0 Comment</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name="heart" style={{ paddingHorizontal: 20 }} size={20} />
          <Icon name="comment" size={20} />
        </View>
      </View>
    </View>
  );
}

export function ThanksWidget({ thanksList }) {
  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <View>
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Thanks</Text>
          <Text>View All</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <CardStack
            disableBottomSwipe={true}
            disableTopSwipe={true}
            ref={(swiper) => {}}
            disableBottomSwipe={true}
            disableTopSwipe={true}
            disableRightSwipe={true}
            renderNoMoreCards={() => false}
            style={{
              elevation: 5,
              width: windowWidth - 40,
              height: 200,
              backgroundColor: "#fff",
              flex: 1,
              alignItems: "center",
            }}
          >
            {[1, 2, 3, 4, 5].map((x) => {
              return (
                <Card
                  style={{
                    flex: 1,
                    backgroundColor: "#ee2f32",
                  }}
                  key={x}
                >
                  <ThanksItem />
                </Card>
              );
            })}
          </CardStack>
        </View>
      </View>
    </View>
  );
}

export function ExpenseItem({ navigation, news }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        elevation: 5,
        height: 80,
        paddingVertical: 20,
        paddingHorizontal: 20,
        width: windowWidth - 40,
      }}
    >
      <View>
        <Text style={{ fontSize: fonts.tiny }}>Title of Expense</Text>
        <Text style={{ fontSize: fonts.tiny }}>Rs.0</Text>
      </View>
      <View style={{}}>
        <Icon name="edit" size={25} color={colors.primaryColor} />
      </View>
    </View>
  );
}

export function ExpensesWidget({ thanksList }) {
  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <View style={{}}>
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Expenses Overview</Text>
          <Text>View Expenses</Text>
        </View>
        <View>
          <CardStack
            disableBottomSwipe={true}
            disableTopSwipe={true}
            ref={(swiper) => {}}
            disableBottomSwipe={true}
            disableTopSwipe={true}
            disableRightSwipe={true}
            renderNoMoreCards={() => false}
            style={{
              elevation: 0,
              height: 80,
              backgroundColor: "#fff",
            }}
          >
            {[1, 2, 3, 4, 5].map((x) => {
              return (
                <Card
                  style={{
                    flex: 1,
                    backgroundColor: "#ee2f32",
                  }}
                  key={x}
                >
                  <ExpenseItem />
                </Card>
              );
            })}
          </CardStack>
        </View>
      </View>
    </View>
  );
}

function TapInTapOutWidget() {
  return (
    <View>
      <TapInTapOut />
    </View>
  );
}
export function UpcomingHolidaysWidget() {
  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          marginVertical: 10,
        }}
      >
        My Upcoming Holidays
      </Text>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          elevation: 5,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <Image source={require("../../../assets/no_holidays.png")} />
        <Text>No Upcoming Holidays</Text>
      </View>
    </View>
  );
}

export function AddExpenseRequestHolidayWidget({ navigation }) {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <WidgetCard
          text="Add Expenses"
          icon={require("../../../assets/receipt.png")}
          style={{ width: "45%", padding: 20 }}
          navigation={navigation}
          onPress={() => {
            navigation.navigate("Root", { screen: "NewReportUI" });
          }}
        />
        <WidgetCard
          text="Request Holiday"
          icon={require("../../../assets/holiday.png")}
          style={{ width: "45%", padding: 20 }}
          navigation={navigation}
          onPress={() => {
            navigation.navigate("Root", { screen: "NewHolidayRequestPage" });
          }}
        />
      </View>
    </View>
  );
}
export function HolidaysWidget() {
  return (
    <View>
      <Text style={{ marginTop: 20 }}>Holidays</Text>

      <WidgetCardDual
        style={{
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
        }}
        texts={["7 Days", "12 Days"]}
        icons={["ios-calendar", "ios-home"]}
      ></WidgetCardDual>
    </View>
  );
}
export function EditWidgetsButton({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        color: "#344771",
        elevation: 5,
        width: "50%",
        marginVertical: 30,
        padding: 8,
        borderRadius: 10,
        alignSelf: "center",
      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        onPress={() =>
          navigation.navigate("Root", {
            screen: "EditWidgetsPage",
          })
        }
      >
        <Icon name="plus-circle" size={35} color="#ee2f32" />
        <Text>Edit Widgets</Text>
      </TouchableOpacity>
    </View>
  );
}

export class HomeComponent extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <HomepageHeader />
        <ScrollView
          style={{
            paddingHorizontal: 20,
          }}
        >
          <UpcomingHolidaysWidget />
          <ExpensesWidget />
          <AddExpenseRequestHolidayWidget navigation={this.props.navigate} />
          <HolidaysWidget />
          <ThanksWidget />
          <EditWidgetsButton navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

class WidgetCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.widgetCard, { ...this.props.style }]}>
        <Image source={this.props.icon} />
        {/* <Icon name={this.props.icon} size={50} /> */}

        <Text
          style={styles.widgetText}
          onPress={() => {
            this.props.onPress();
            // this.props.navigatio.navigate("NewReportUI");
          }}
        >
          {this.props.text}
        </Text>
      </View>
    );
  }
}

class WidgetCardDual extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.widgetCardDual, { ...this.props.style }]}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <Image source={require("../../../assets/clock.png")} />
          </View>
          <View style={{ paddingLeft: 20, justifyContent: "center" }}>
            <Text style={{ fontSize: 14 }}>Taken</Text>
            <Text style={{ fontWeight: "500" }}>7 Days</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <Icon name="calendar" size={40} color="#2e93d9" />
          </View>
          <View style={{ paddingLeft: 20, justifyContent: "center" }}>
            <Text style={{ fontSize: 14 }}>Remaining</Text>
            <Text style={{ fontWeight: "500" }}>12 Days</Text>
          </View>
        </View>
      </View>
    );
  }
}
// class WidgetsComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <View style={styles.widgets}>
//         <TapInTapOut />

//         <View>
//           <Text>My upcoming holidays</Text>
//           <WidgetCard
//             text="My Upcoming Holiday"
//             icon={require("../../../assets/no_holidays.png")}
//           />
// <View
//   style={{
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   }}
// >
//   <WidgetCard
//     text="Add Expenses"
//     icon={require("../../../assets/receipt.png")}
//     style={{ width: "45%", padding: 20 }}
//   />
//   <WidgetCard
//     text="Request Holiday"
//     icon={require("../../../assets/holiday.png")}
//     style={{ width: "45%", padding: 20 }}
//   />
// </View>
// <Text style={{ marginTop: 20 }}>Holidays</Text>

// <WidgetCardDual
//   style={{
//     justifyContent: "space-between",
//     paddingLeft: 20,
//     paddingRight: 20,
//   }}
//   texts={["7 Days", "12 Days"]}
//   icons={["ios-calendar", "ios-home"]}
// ></WidgetCardDual>

//         </View>
//       </View>
//     );
//   }
// }

// export class HomeComponent extends React.Component {
//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <View
//           style={{
//             position: "absolute",
//             left: 0,
//             top: 0,
//           }}
//         >
//           <HomePageHeader />
//         </View>
//         <View
//           style={{
//             padding: 10,
//             height: 300,
//           }}
//         >
//           <View>
//             <SwiperCard />
//           </View>
//         </View>
//         <WidgetsComponent navigation={this.props.navigation} />
//       </ScrollView>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
  },
  widgets: {
    padding: 20,
    backgroundColor: "#f2f2f2",
    flexDirection: "column",
  },
  widgetCard: {
    padding: 10,
    backgroundColor: "#fff",
    color: "#344771",
    elevation: 5,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  widgetCardDual: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff",
    color: "#344771",
    elevation: 5,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  widgetText: {
    color: "#344771",
    marginTop: 5,
  },
  editWidgetButton: {
    backgroundColor: "#fff",
    color: "#344771",
    elevation: 5,
    width: "50%",
    marginTop: 30,
    padding: 8,
    borderRadius: 10,
    alignSelf: "center",
  },
});
