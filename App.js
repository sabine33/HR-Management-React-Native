import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Button,
  Text,
  Header,
  Left,
  Right,
  Icon,
  Body,
  Title,
} from "native-base";

export default function App() {
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={{ alignItems: "center", justifyContent: "center" }}>
          <Title style={{ textAlign: "left" }}> Welcome </Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
            <View width={20} />
            <Icon name="heart" />
          </Button>
        </Right>
      </Header>
      <Button>
        <Text>Button</Text>
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
