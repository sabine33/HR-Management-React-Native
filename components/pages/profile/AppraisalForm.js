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
  Picker,
  ActionSheet,
  Row,
} from "native-base";

import DatePicker from "react-native-datepicker";

import { Text, View } from "react-native";
import { colors } from "../generic/GlobalStyles";
export class AppraisalForm extends Component {
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
            <Title>Appraisal</Title>
          </Body>
        </Header>

        <Content padder>
          <Form>
            <Item stackedLabel>
              <Label>Appraisal Review Date</Label>

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
            <Item fixedLabel>
              <Label>Reviewer *</Label>

              <Row style={{ alignItems: "center" }}>
                <Input value="" />
                <Icon
                  name="chevron-down"
                  onPress={() => {
                    ActionSheet.show(
                      {
                        options: ["A", "B", "C"],
                        cancelButtonIndex: 0,
                        destructiveButtonIndex: 0,
                        title: "Reviewer",
                      },
                      (buttonIndex) => {
                        this.setState({});
                      }
                    );
                  }}
                ></Icon>
              </Row>
            </Item>
            <Item stackedLabel>
              <Label>Notes</Label>
              <Input />
            </Item>

            <Item stackedLabel>
              <Label>Action Plan</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Objectives</Label>
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
          </Fab>
        </Footer>
      </Container>
    );
  }
}
