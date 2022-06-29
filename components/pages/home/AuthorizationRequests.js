import React, { Component } from "react";

import {
  Container,
  Header,
  Button,
  Content,
  ActionSheet,
  Card,
  CardItem,
  Body,
  Left,
  Title,
  Thumbnail,
  Row,
  View,
  Col,
  Icon,
  Right,
} from "native-base";
const uri = "https://source.unsplash.com/100x100/?profile";
import SweetAlert from "react-native-sweet-alert";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { colors } from "react-native-elements";

var BUTTONS = [
  { text: "Approve", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Reject", icon: "analytics", iconColor: "#f42ced" },
  { text: "Remarks", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" },
];

function AuthCard({ title, content, user, date, navigation }) {
  return (
    <Content style={{ marginVertical: 10 }}>
      <Card>
        <CardItem header bordered>
          <Row style={{ alignItems: "center" }}>
            <Thumbnail
              source={{
                uri: uri,
              }}
              size={30}
              resizeMode="center"
            ></Thumbnail>

            <View style={{ width: 10 }} />
            <Col>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                {user || "Sabin Khanal"}
              </Text>
              <Text style={{ fontSize: 12 }}>{date || "2020-12-12"}</Text>
            </Col>
            <Text style={{ fontWeight: "bold", color: colors.warning }}>
              {title || "Holiday Request"}
            </Text>
          </Row>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={{ paddingVertical: 10 }}>
              {content ||
                "Whenever you hear the consensus of scientists agrees on something or other, reach for your wallet, because you're being had."}
            </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Button
            style={{
              backgroundColor: colors.primary,
              borderRadius: 20,
              padding: 20,
            }}
            onPress={() => {
              navigation.navigate("Root", {
                screen: "AuthorizationUI",
              });
            }}
          >
            <Text style={{ color: "#fff" }}>View Detail</Text>
          </Button>
        </CardItem>
      </Card>
    </Content>
  );
}
const showAlert = () => {
  SweetAlert.showAlertWithOptions(
    {
      title: "Approved",
      subTitle: "You authorized the following request.",
      confirmButtonTitle: "OK",
      confirmButtonColor: "#000",
      otherButtonTitle: "Cancel",
      otherButtonColor: "#dedede",
      style: "success",
      cancellable: true,
    },
    (callback) => console.log("callback")
  );
};

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class AuthorizationRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        {/* <Header
          androidStatusBarColor="#ee2f32"
          style={{ backgroundColor: "#ee2f32" }}
        >
          <Body>
            <Title>Authorization Requests</Title>
          </Body>

          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header> */}
        <Content padder>
          <AuthCard title="Leave Request" navigation={this.props.navigation} />
          <AuthCard title="Job Completion" navigation={this.props.navigation} />
          <AuthCard />
        </Content>
      </Container>
    );
  }
}
