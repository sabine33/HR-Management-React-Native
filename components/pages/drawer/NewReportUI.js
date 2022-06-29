import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  DatePicker,
  Right,
  CheckBox,
  Switch,
  Button,
  Fab,
  Icon,
} from "native-base";
import { Picker, View, Text } from "react-native";

export class NewReportUI extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Label>Name</Label>
              <Input placeholder="" />
            </Item>
            <Item>
              <Label>Currency</Label>
              <Input disabled />
              <Picker></Picker>
            </Item>
            <Item>
              <Label>Date</Label>
              <Input disabled />
              <DatePicker value={new Date()}></DatePicker>
            </Item>
            <Item
              style={{ paddingVertical: 10, justifyContent: "space-between" }}
            >
              <Label>Taxable</Label>
              <View>
                <Switch />
              </View>
            </Item>
            <Item>
              <Label>Tax Code</Label>
              <Input disabled />
              <Picker></Picker>
            </Item>
          </Form>
        </Content>
        <Fab
          active={false}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={() => this.setState({})}
        >
          <Icon name="save" />
        </Fab>
      </Container>
    );
  }
}
