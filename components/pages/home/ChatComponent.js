import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { BottomSheet, ListItem } from "react-native-elements";
import { Appbar, Checkbox } from "react-native-paper";
import {
  Header,
  Left,
  Right,
  Button,
  Body,
  Segment,
  Icon,
  Thumbnail,
  Card,
  CardItem,
  Container,
} from "native-base";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const list = [
  { title: "All" },
  { title: "Favorites" },
  {
    title: "Active",
  },
  {
    title: "Archived",
  },
];

function ChatOptions({ isVisible, onPress }) {
  // let [isVisible, setIsVisible] = useState(true);

  return (
    <View>
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
      >
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={() => onPress()}
            style={{}}
            bottomDivider={true}
          >
            <ListItem.Content style={{}} key={i}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: 1,
                  padding: 0,
                  margin: 0,
                }}
              >
                <Text style={{ flex: 1 }}>{l.title}</Text>
                <Checkbox />
              </View>
              {/* <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title> */}
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </View>
  );
}

function ChatList({ navigation, title }) {
  const uri = "https://source.unsplash.com/100x100/?profile";

  return (
    <View
      style={{
        marginHorizontal: 10,
      }}
    >
      <Card
        style={{
          padding: 20,
          elevation: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        onTouchStart={() => {
          navigation.navigate("Root", {
            screen: "ChatPage",
          });
        }}
      >
        <Thumbnail small source={{ uri: uri }} />

        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              fontFamily: "OpenSans-SemiBold",
              fontWeight: "400",
            }}
          >
            {title}
          </Text>
          <Text style={{ fontStyle: "italic", fontSize: 12 }}>
            Hi, K chha !
          </Text>
        </View>
        <Text
          style={{
            justifyContent: "flex-end",
            flex: 1,
            textAlign: "right",
            fontSize: 12,
          }}
        >
          Yesterday
        </Text>
      </Card>
    </View>
  );
}

export class ChatComponent extends React.Component {
  onShowBottomBar = () => {};

  state = {
    isBottomSheetShown: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          androidStatusBarColor="#ee2f32"
          style={{ backgroundColor: "#ee2f32" }}
        >
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>

          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        {/* <Appbar.Header style={styles.header}>
          <Appbar.Content title="Chat" />
          <Appbar.Action
            icon="filter-menu"
            onPress={() => this.setState({ isBottomSheetShown: true })}
          />
        </Appbar.Header> */}

        <View style={styles.header}>
          <Ionicons
            name="person-add"
            size={35}
            style={{
              width: 60,
              height: 60,
              textAlign: "center",
              padding: 10,
              backgroundColor: "#fff",
              borderRadius: 90,
              color: "#ee2f32",
            }}
            onPress={() => {
              this.props.navigation.navigate("Root", {
                screen: "NewChatPage",
              });
            }}
          />

          <Ionicons
            name="ios-people"
            size={35}
            style={{
              marginLeft: 20,
              width: 60,
              height: 60,
              textAlign: "center",
              padding: 10,
              backgroundColor: "#fff",
              borderRadius: 90,
              color: "#ee2f32",
            }}
            onPress={() => {
              this.props.navigation.navigate("Root", {
                screen: "NewGroupChatPage",
              });
            }}
          />
        </View>

        {["Ram Bahadur", "Shyam Bahadur", "Hari Bahadur"].map((x) => {
          return (
            <ChatList title={x} navigation={this.props.navigation} key={x} />
          );
        })}
        {/* <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            height: "80%",
            justifyContent: "center",
          }}
        >
          <Image source={require("../../../assets/no_chat.png")}></Image>
          <Text style={{ fontSize: 15, paddingTop: 50 }}>
            You have no chat messages yet.
          </Text>
        </View> */}
        {this.state.isBottomSheetShown && (
          <ChatOptions
            isVisible={this.state.isBottomSheetShown}
            onPress={() => {
              this.setState({ isBottomSheetShown: false });
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  header: {
    backgroundColor: "#ee2f32",
    padding: 30,
    flexDirection: "row",
  },
  body: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
    flexGrow: 1,
  },
});
