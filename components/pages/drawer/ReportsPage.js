import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  View,
  Body,
  Title,
  CardItem,
  List,
  ListItem,
  Col,
  Button,
  Fab,
  Icon,
} from "native-base";
import { Text } from "react-native";
import { colors } from "../generic/GlobalStyles";
import { StatusBar } from "expo-status-bar";

function ListContent({ list }) {
  return (
    <List>
      {[...list].map((x) => {
        return (
          <ListItem>
            <Col>
              <Text style={{ fontWeight: "bold", paddingBottom: 10 }}>
                Trip to pokhara
              </Text>
              <Text>रु.{(Math.random() * 1000).toFixed(0)}</Text>
            </Col>
          </ListItem>
        );
      })}
    </List>
  );
}

export class ReportsPage extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab
            heading="All"
            tabStyle={{ backgroundColor: "#8a1c24" }}
            activeTabStyle={{ backgroundColor: colors.secondary }}
          >
            <ListContent list={[1, 2, 3, 4]} />
          </Tab>
          <Tab
            heading="Pending"
            tabStyle={{ backgroundColor: "#8a1c24" }}
            activeTabStyle={{ backgroundColor: colors.secondary }}
          >
            <ListContent list={[1, 2]} />
          </Tab>
          <Tab
            heading="Approved"
            tabStyle={{ backgroundColor: "#8a1c24" }}
            activeTabStyle={{ backgroundColor: colors.secondary }}
          >
            <ListContent list={[3, 4]} />
          </Tab>
        </Tabs>

        <Fab
          active={false}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
        >
          <Icon
            name="add-circle"
            onPress={() => {
              this.props.navigation.navigate("Root", { screen: "NewReportUI" });
            }}
          />
          <Button style={{ backgroundColor: "#34A34F" }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: "#3B5998" }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: "#DD5144" }}>
            <Icon name="mail" />
          </Button>
        </Fab>
      </Container>
    );
  }
}
