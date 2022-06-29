import {
  Container,
  Header,
  Item,
  Form,
  Label,
  Input,
  Content,
} from "native-base";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { textStyleTheme } from "../generic/GlobalStyles";

export function StaffPersonalInformationPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Aabhar Bikram" });
  }, []);
  return (
    <Container>
      <Content padder>
        <Form>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input
              value="sabin.khanal.33@gmail.com"
              style={{ color: "#aaa", fontFamily: "OpenSans-Light" }}
            />
          </Item>
          <Item stackedLabel>
            <Label>Address</Label>
            <Input
              value="Nayabazar,Kathmandu"
              style={{ color: "#aaa", fontFamily: "OpenSans-Light" }}
            />
          </Item>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
});
