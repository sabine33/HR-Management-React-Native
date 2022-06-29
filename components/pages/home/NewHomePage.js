import { StatusBar } from "expo-status-bar";
import {
  Card,
  Container,
  Footer,
  View,
  Icon,
  CardItem,
  DeckSwiper,
  Left,
  Thumbnail,
  Body,
  Right,
  Segment,
  Button,
  Header,
  Row,
} from "native-base";
import React, { Component } from "react";
import { Text } from "react-native";
import { Image } from "react-native";

import {
  EditWidgetsButton,
  ExpensesWidget,
  ThanksWidget,
  AddExpenseRequestHolidayWidget,
  HolidaysWidget,
} from "./HomeComponent";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SingleThanks } from "../drawer/SingleThanks";
import TapInTapOut from "./TapInTapOut";
import { HomepageHolidaysWidget } from "../components/DashboardComponents";
import { colors } from "../generic/GlobalStyles";
import { color } from "react-native-reanimated";

function Holiday() {
  return (
    <View style={{ marginVertical: 10 }}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text>Upcoming Holidays</Text>
        <Text style={{ fontFamily: "OpenSans-Light" }}>View All</Text>
      </View>

      <Card
        style={{
          padding: 10,
          marginTop: 10,
          elevation: 3,
        }}
      >
        <CardItem style={{ flexDirection: "row" }}>
          <Body>
            <Text>Your next holiday is in :</Text>

            <Row style={{ alignItems: "center" }}>
              <Icon name="calendar" style={{ color: "#ee2f32" }}></Icon>

              <Text
                style={{
                  fontWeight: "bold",
                  marginVertical: 10,
                  paddingLeft: 10,
                }}
              >
                Jan 30,2020
              </Text>
            </Row>
            <Text>3 Days</Text>
          </Body>
          <Right>
            <Icon
              name="airplane-outline"
              style={{ color: "#ee2f32", fontSize: 30 }}
            />
          </Right>
        </CardItem>
      </Card>
    </View>
  );
}
function News() {
  return (
    <View style={{ marginVertical: 10 }}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text>Latest News</Text>
        <Text style={{ fontFamily: "OpenSans-Light" }}>View All</Text>
      </View>
      <NewsList />
      {/* <Card
        style={{
          paddingTop: 20,
          marginTop: 10,
          paddingHorizontal: 10,
          alignContent: "flex-start",
          elevation: 3,
        }}
      >
        <Text
          style={{
            justifyContent: "center",
          }}
        >
          Regarding the corona pandemic, office will be closed till next
          notice.It's required for all employees to check in with the mobile
          app.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontStyle: "italic", marginVertical: 10 }}>
            Jan 30 2020
          </Text>
          <View style={{ flexDirection: "row", paddingRight: 40 }}>
            <Text>20</Text>
            <View width={10}></View>
            <Icon name="heart-outline" color="#ee2f32"></Icon>
            <View width={10}></View>
            <Text>2</Text>
            <View width={10}></View>
            <Icon name="chatbox-outline" color="#ee2f32"></Icon>
          </View>
        </View>
      </Card> */}
    </View>
  );
}
function Thanks({ navigation }) {
  return (
    <View style={{ marginVertical: 10 }}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text>Thanks</Text>
        <Text style={{ fontFamily: "OpenSans-Light" }}>View All</Text>
      </View>
      <Card
        style={{
          paddingTop: 20,
          paddingBottom: 10,
          paddingHorizontal: 20,
          paddingLeft: 20,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
          elevation: 3,
        }}
      >
        <Icon
          name="trophy"
          style={{ color: colors.primaryColor, fontSize: 35 }}
        />
        <Text
          style={{ fontSize: 20, fontFamily: "OpenSans-Bold" }}
          onPress={() => {
            navigation.navigate("Root", { screen: "ThanksPage" });
          }}
        >
          Ambassador
        </Text>
        <Text style={{ textAlign: "justify", paddingVertical: 10 }}>
          You sent a thanks badge to sabin khanal.
        </Text>
        <Text style={{ fontStyle: "italic", marginVertical: 10 }}>
          10:12 PM
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{ flexDirection: "row", paddingRight: 40, paddingTop: 20 }}
          >
            <Text>20</Text>
            <View width={10}></View>
            <Icon name="heart-outline" color={colors.primaryColor}></Icon>
            <View width={10}></View>
            <Text>2</Text>
            <View width={10}></View>
            <Icon name="chatbox-outline" color={colors.primaryColor}></Icon>
          </View>
        </View>
      </Card>
    </View>
  );
}

function Swiper() {
  const cards = [
    {
      text: "Card One",
      name: "One",
      image: require("../../../assets/images/exp_delete_infograph.png"),
    },
    {
      text: "Card One",
      name: "One",
      image: require("../../../assets/images/exp_delete_infograph.png"),
    },
    {
      text: "Card One",
      name: "One",
      image: require("../../../assets/images/exp_delete_infograph.png"),
    },
  ];
  return (
    <View style={{ height: 300, marginVertical: 20 }}>
      <DeckSwiper
        dataSource={cards}
        renderItem={(item) => (
          <Card style={{ elevation: 3 }}>
            <CardItem>
              <Left>
                <Thumbnail source={item.image} />
                <Body>
                  <Text>{item.text}</Text>
                  <Text note>NativeBase</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={{ flexDirection: "column" }}>
              <Image
                style={{ height: 200, flex: 1 }}
                source={item.image}
                resizeMode="contain"
              />
            </CardItem>
            <CardItem>
              <Icon name="chatbox-outline" style={{ color: "#ED4A6A" }} />
              <Text>{item.name}</Text>
            </CardItem>
          </Card>
        )}
      />
    </View>
  );
}

function NewsList() {
  const cards = [
    {
      text: "Card One",
      name: "One",
      image: require("../../../assets/images/exp_delete_infograph.png"),
    },
    {
      text: "Card One",
      name: "One",
      image: require("../../../assets/images/exp_delete_infograph.png"),
    },
    {
      text: "Card One",
      name: "One",
      image: require("../../../assets/images/exp_delete_infograph.png"),
    },
  ];
  return (
    <View style={{ height: 220, marginVertical: 10 }}>
      <DeckSwiper
        dataSource={cards}
        renderItem={(item) => (
          <Card style={{ elevation: 3 }}>
            <CardItem>
              <Left>
                <Thumbnail source={item.image} />
                <Body>
                  <Text style={{ fontWeight: "bold" }}>Notice from office</Text>
                  <Text style={{ fontStyle: "italic", fontSize: 12 }}>
                    2020-12-12 10PM
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem
              cardBody
              style={{ flexDirection: "column", paddingHorizontal: 10 }}
            >
              <Text
                style={{
                  justifyContent: "center",
                }}
              >
                Regarding the corona pandemic, office will be closed till next
                notice.It's required for all employees to check in with the
                mobile app.
              </Text>
            </CardItem>
            <CardItem style={{ marginTop: 10 }}>
              <Icon name="heart" style={{ color: "#ED4A6A" }} />
              <Text>{100}</Text>
              <View style={{ width: 30 }}></View>
              <Icon name="chatbox" style={{ color: "#ED4A6A" }} />
              <Text>{200}</Text>
            </CardItem>
          </Card>
        )}
      />
    </View>
  );
}

function HolidayToday() {
  return (
    <View>
      <Text>On Holiday Today</Text>
      <Image
        source={require("../../../assets/ic_maps_local_restaurant.png")}
      ></Image>
      <Text>Everyone is here.</Text>
    </View>
  );
}

function Authorizations() {
  return (
    <View style={{ marginVertical: 10 }}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text>Authorizations</Text>
        <Text style={{ fontFamily: "OpenSans-Light" }}>View All</Text>
      </View>

      <Card
        style={{
          padding: 20,
          marginTop: 10,
          elevation: 3,
        }}
      >
        <Row style={{ justifyContent: "space-between" }}>
          <Icon name="calendar" style={{ color: "#ee2f32" }}></Icon>
          <Text>Holidays</Text>
          <Icon
            name="chevron-forward-circle"
            style={{ color: "#ee2f32" }}
          ></Icon>
        </Row>
      </Card>
      <Card
        style={{
          padding: 20,
          marginTop: 5,
          elevation: 3,
        }}
      >
        <Row style={{ justifyContent: "space-between" }}>
          <Icon name="calendar" style={{ color: "#ee2f32" }}></Icon>
          <Text>Logbook</Text>
          <Icon
            name="chevron-forward-circle"
            style={{ color: "#ee2f32" }}
          ></Icon>
        </Row>
      </Card>
    </View>
  );
}
function PulseResults() {
  return (
    <View>
      <Card>
        <Text>Jan 21,2020</Text>
        <Text>Are you coming to office party?</Text>
      </Card>
    </View>
  );
}

class NewHomePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <Container style={{ backgroundColor: "#f2f2f2", flex: 1 }}>
        {/* <StatusBar backgroundColor={colors.primaryColor}></StatusBar> */}

        <View
          style={{
            padding: 20,
            paddingTop: 30,
            backgroundColor: colors.primaryColor,
          }}
        >
          <Text
            style={{
              fontSize: 23,
              color: "#fff",
              fontFamily: "OpenSans-Bold",
            }}
          >
            Hi Sabin !
          </Text>
          <Text style={{ marginVertical: 10, color: "#fff" }}>
            Here's whats happening today
          </Text>
        </View>
        <ScrollView
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <View style={{ paddingBottom: 100 }}>
            <HolidaysWidget />

            <TapInTapOut />
            <AddExpenseRequestHolidayWidget
              navigation={this.props.navigation}
            />

            <Thanks navigation={this.props.navigation} />

            <Holiday />
            <News />
            {/* <View style={{ height: 380 }}>
              <Swiper />
            </View> */}

            <Authorizations></Authorizations>
            <ExpensesWidget />

            <EditWidgetsButton navigation={this.props.navigation} />
          </View>
        </ScrollView>
      </Container>
    );
  }
}
export default NewHomePage;
