import React, { Component } from "react";
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
} from "native-base";

import DatePicker from "react-native-datepicker";

import { Text, View } from "react-native";
import { colors } from "../generic/GlobalStyles";
export class DrivingLicensePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      isDatePickerVisible: false,
      chosenDate: new Date(),
      datePicker: null,
    };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    this.hideDatePicker();
  };

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header style={{ backgroundColor: colors.primaryColor }}>
          <Left>
            <Icon
              name="arrow-back"
              style={{ color: "#fff" }}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            ></Icon>
          </Left>
          <Body>
            <Title>Driving License</Title>
          </Body>
        </Header>

        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label>License Number</Label>
              <Input placeholder="" />
            </Item>
            <Item stackedLabel>
              <Label>License Type</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Expiry Date</Label>

              <Item>
                <Input
                  placeholder="2020-12-12"
                  disabled
                  style={{ fontFamily: "OpenSans-Light" }}
                />

                <DatePicker
                  showIcon={true}
                  hideText={true}
                  ref={(ref) => {
                    // this.setState({ datePicker: ref });
                  }}
                  date={this.state.chosenDate}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      marginLeft: 100,
                    },
                    dateInput: {},
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {
                    this.setState({ chosenDate: date });
                  }}
                />

                {/* <Icon
                  active
                  name="calendar"
                  style={{ color: colors.primaryColor }}
                  onPress={() => {
                    this.setState({ isDatePickerVisible: true });
                  }}
                /> */}
              </Item>
            </Item>
            <Item stackedLabel>
              <Label>Comments</Label>
              <Input />
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
            onPress={() => {
              this.setState({
                isDatePickerVisible: true,
              });
              this.state.datePicker.onPressDate();
            }}
          >
            <Icon name="save" />
            {/* <Button style={{ backgroundColor: "#34A34F" }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: "#3B5998" }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: "#DD5144" }}>
              <Icon name="mail" />
            </Button> */}
          </Fab>
        </Footer>
      </Container>
    );
  }
}
