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
var BUTTONS = [
  { text: "Approve", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Reject", icon: "analytics", iconColor: "#f42ced" },
  { text: "Remarks", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" },
];

function AuthCard({ title, content, user, date }) {
  return (
    <Content style={{ marginVertical: 10 }}>
      <Card>
        <CardItem header bordered>
          <Text style={{ fontWeight: "bold" }}>
            {title || "Holiday Request"}
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Row style={{ alignItems: "flex-start" }}>
              <Thumbnail
                source={{
                  uri: uri,
                }}
                size={30}
                resizeMode="center"
              ></Thumbnail>

              <View style={{ width: 10 }} />
              <Col>
                <Text style={{ fontSize: 14 }}>{user || "Sabin Khanal"}</Text>
                <Text style={{ fontSize: 12, fontStyle: "italic" }}>
                  {date || "2020-12-12"}
                </Text>
              </Col>
            </Row>

            <Text style={{ paddingVertical: 20 }}>
              {content ||
                "Whenever you hear the consensus of scientists agrees on something or other, reach for your wallet, because you're being had."}
            </Text>
          </Body>
        </CardItem>
        <CardItem footer>
          <Button
            style={{
              backgroundColor: "#ee2f32",
              borderRadius: 20,
              padding: 20,
            }}
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Choose an appropriate action",
                },
                (buttonIndex) => {
                  showAlert();
                  //   this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              )
            }
          >
            <Text style={{ color: "#fff" }}>Take Action</Text>
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
export default class AuthorizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor="#ee2f32"
          style={{ backgroundColor: "#ee2f32" }}
        >
          <Body>
            <Title>Authorization Requests</Title>
          </Body>
        </Header>
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
          <AuthCard title="Leave Request" />
          <AuthCard title="Job Completion" />
          <AuthCard />
        </Content>
      </Container>
    );
  }
}
