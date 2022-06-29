import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Title,
  Left,
  Icon,
  Body,
  Fab,
  Button,
  Footer,
  ActionSheet,
} from "native-base";
import React, { useState, Component } from "react";

import { Text, View } from "react-native";
import { colors } from "../generic/GlobalStyles";

export class PersonalInformationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      BUTTONS: ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"],
      DESTRUCTIVE_INDEX: 3,
      CANCEL_INDEX: 4,
    };
  }

  showActionSheet = () => {
    // ActionSheet.show(
    //   {
    //     options: this.state.BUTTONS,
    //     cancelButtonIndex: 0,
    //     destructiveButtonIndex: 1,
    //     title: "Testing",
    //   },
    //   (buttonIndex) => {
    //     alert("Clicked");
    //   }
    // );
  };

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label>First Name</Label>
              <Input placeholder="" />
            </Item>
            <Item stackedLabel>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Known As </Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Nationality</Label>
              <Input
                onTouchStart={() => {
                  // this.showActionSheet();
                }}
              />
            </Item>
            <Item stackedLabel>
              <Label>Date of birth</Label>

              <Item>
                <Input
                  placeholder="2020-12-12"
                  disabled
                  style={{ fontFamily: "OpenSans-Light" }}
                />

                {/* <MyDatePicker /> */}
              </Item>
            </Item>
            <Item stackedLabel>
              <Label>Start Date</Label>

              <Item>
                <Input
                  placeholder="2020-12-12"
                  disabled
                  style={{ fontFamily: "OpenSans-Light" }}
                />

                {/* <MyDatePicker /> */}
              </Item>
            </Item>
          </Form>
        </Content>

        <Footer style={{ backgroundColor: "transparent" }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#5067FF" }}
            position="bottomRight"
            onPress={() => {}}
          >
            <Icon name="save" />
          </Fab>
        </Footer>
      </Container>
    );
  }
}
