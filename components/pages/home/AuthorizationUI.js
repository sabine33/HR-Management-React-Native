import {
  Container,
  Input,
  Label,
  Thumbnail,
  Title,
  Card,
  Row,
  Col,
  Header,
  Body,
  Left,
  Right,
  Form,
  Content,
  Item,
  CardItem,
  Icon,
  Button,
} from "native-base";

import React, { Component } from "react";
import { StatusBar, View, Text, StyleSheet, Image, Alert } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import SweetAlert from "react-native-sweet-alert";

export default class AuthorizationUI extends Component {
  state = {
    visible: false,
  };

  onPress = (status) => {
    this.setState({ visible: true });
    SweetAlert.showAlertWithOptions(
      {
        title: "Approved",
        subTitle: "You authorized the following request.",
        confirmButtonTitle: "OK",
        confirmButtonColor: "#000",
        otherButtonTitle: "Cancel",
        otherButtonColor: "#dedede",
        style: status == "approve" ? "success" : "error",
        cancellable: true,
      },
      (callback) => console.log("callback")
    );

    // Alert.alert(
    //   "Are You Sure ?",
    //   "You can't undo this action.",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => {
    //         alert("Rejected");
    //       },
    //       style: "cancel",
    //     },
    //     {
    //       text: "OK",
    //       onPress: () => {
    //         alert("Accepted");
    //       },
    //     },
    //   ],

    //   { cancelable: false }
    // );
  };
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="transparent"></StatusBar>
        <Content style={{ padding: 20 }} padding>
          <Form>
            <Item stackedLabel>
              <Label style={{ fontFamily: "OpenSans-Regular" }}>
                Authorization Type
              </Label>
              <Input
                value="Leave"
                textContentType="name"
                style={{
                  marginTop: 10,
                  color: "#aaa",
                  fontFamily: "OpenSans-Light",
                }}
              />
            </Item>
            <Item stackedLabel>
              <Label style={{ fontFamily: "OpenSans-Regular" }}>
                Employee Name
              </Label>
              <Input
                value="Sabin Khanal"
                textContentType="name"
                disabled
                style={{
                  marginTop: 10,
                  color: "#aaa",
                  fontFamily: "OpenSans-Light",
                }}
              />
            </Item>
            <Item stackedLabel>
              <Label style={{ fontFamily: "OpenSans-Regular" }}>Date</Label>
              <Input
                value="2020-12-12"
                textContentType="name"
                disabled
                style={{
                  marginTop: 10,
                  color: "#aaa",
                  fontFamily: "OpenSans-Light",
                }}
              />
            </Item>
          </Form>
          <View style={{ marginVertical: 30 }}>
            <Card
              style={{ elevation: 3, padding: 20, flexDirection: "column" }}
            >
              <Row style={styles.row}>
                <Text style={styles.label}>Appraisal Review Date:</Text>
                <Text>Wed,13 Feb , 2020</Text>
              </Row>
              <Row style={styles.row}>
                <Text style={styles.label}>Reviewer Name:</Text>
                <Text>Sabin Khanal</Text>
              </Row>
              <Row style={styles.row}>
                <Text style={styles.label}>Notes:</Text>
                <Text>All objectives met to standard.</Text>
              </Row>
              <Row style={styles.row}>
                <Text style={styles.label}>Action Plan:</Text>
                <Text>Exceed Expectations</Text>
              </Row>
              <Row style={styles.row}>
                <Text style={styles.label}>Objectives:</Text>
                <Text style={{ flex: 1, textAlign: "left" }}>
                  Execute all project plans within 6 week lead time and attend
                  all meetings .
                </Text>
              </Row>
            </Card>

            <Card style={{ padding: 10 }}>
              <Text>Content</Text>
              <CardItem cardBody>
                <Image
                  source={{ uri: "https://picsum.photos/300/200" }}
                  style={{ height: 300, width: null, flex: 1, marginTop: 20 }}
                />
              </CardItem>
            </Card>

            <Card style={{ padding: 10 }}>
              <Text>Approval List</Text>
              <CardItem cardBody style={{ marginTop: 20 }}>
                <View style={{ flex: 1 }}>
                  <Col>
                    <Text
                      style={{
                        fontFamily: "OpenSans-Bold",
                      }}
                    >
                      Sabin Khanal
                    </Text>
                    <Image
                      source={{
                        uri:
                          "https://upload.wikimedia.org/wikipedia/commons/a/ac/Chris_Hemsworth_Signature.png",
                      }}
                      resizeMode="contain"
                      style={{
                        borderWidth: 2,
                        borderColor: "#ddd",
                        height: 200,
                        width: null,
                        flex: 1,
                        marginTop: 20,
                      }}
                    />
                  </Col>
                  <Col style={{ marginVertical: 20 }}>
                    <Text
                      style={{
                        fontFamily: "OpenSans-Bold",
                      }}
                    >
                      James Shrestha
                    </Text>
                    <Image
                      source={{
                        uri:
                          "https://upload.wikimedia.org/wikipedia/commons/a/ac/Chris_Hemsworth_Signature.png",
                      }}
                      resizeMode="contain"
                      style={{
                        borderWidth: 2,
                        borderColor: "#ddd",
                        height: 200,
                        width: null,
                        flex: 1,
                        marginTop: 20,
                      }}
                    />
                  </Col>
                </View>
              </CardItem>
            </Card>
            <View style={{ marginVertical: 30 }}>
              <Text>Approvers</Text>
              <View style={{ paddingVertical: 30 }}>
                <Card style={{ padding: 10 }}>
                  <Row>
                    <Left>
                      <Thumbnail
                        source={{
                          uri: "https://source.unsplash.com/100x100/?profile",
                        }}
                        size={30}
                        resizeMode="center"
                      />
                    </Left>
                    <Body>
                      <Text>Sabin Khanal</Text>
                    </Body>

                    <Right>
                      <Icon
                        name="time-outline"
                        fontSize={30}
                        style={{ color: "#fcb524" }}
                      />
                    </Right>
                  </Row>
                </Card>
                <Card style={{ padding: 10 }}>
                  <Row>
                    <Left>
                      <Thumbnail
                        source={{
                          uri: "https://source.unsplash.com/100x100/?profile",
                        }}
                        size={30}
                        resizeMode="center"
                      />
                    </Left>

                    <Body>
                      <Text>James Shrestha</Text>
                    </Body>
                    <Right>
                      <Icon
                        name="checkmark-circle"
                        fontSize={30}
                        style={{ color: "#fcb524" }}
                      />
                    </Right>
                  </Row>
                </Card>
              </View>
            </View>

            <View style={{ paddingBottom: 30 }}>
              <Row style={{ justifyContent: "space-around" }}>
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    paddingHorizontal: 50,
                    paddingVertical: 15,
                    backgroundColor: "#fcb524",
                  }}
                  onPress={() => {
                    this.onPress("approve");
                  }}
                >
                  <Text style={{ color: "#fff" }}>Approve</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    paddingHorizontal: 50,
                    paddingVertical: 15,
                    backgroundColor: "#ee2f32",
                  }}
                  onPress={() => {
                    this.onPress("reject");
                  }}
                >
                  <Text style={{ color: "#fff" }}>Reject</Text>
                </TouchableOpacity>
              </Row>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  label: {
    paddingRight: 20,
    fontFamily: "OpenSans-Bold",
  },
  row: {
    paddingVertical: 10,
  },
  content: {
    fontFamily: "OpenSans-Regular",
  },
});
