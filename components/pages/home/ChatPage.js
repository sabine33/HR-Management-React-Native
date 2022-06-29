import React, { useState, useCallback, useEffect } from "react";
import { Text, View } from "react-native";
import { BottomSheet, ListItem } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";

import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../generic/GlobalStyles";

const list = [
  { title: "Add People", icon: "person-add" },
  { title: "Mark as favorite", icon: "star" },
  {
    title: "Mute",
    icon: "volume-mute",
  },
  {
    title: "Mark as unread",
    icon: "eye-off",
  },
  {
    title: "Archive",
    icon: "archive",
  },
  {
    title: "Report",
    icon: "newspaper",
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
            <ListItem.Content style={{}}>
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
                <Icon name={l.icon} size={25} color="#ee2f32" />
                <Text style={{ paddingHorizontal: 20 }}>{l.title}</Text>
              </View>
              {/* <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title> */}
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </View>
  );
}

export function ChatPage({ navigation }) {
  const [isBottomSheetShown, setIsBottomSheetShown] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Ram Bahadur",
      headerStyle: {
        backgroundColor: colors.primaryColor,
      },

      headerRight: () => (
        <Icon
          name="ellipsis-horizontal-outline"
          color="#fff"
          style={{
            paddingHorizontal: 30,
          }}
          size={25}
          onPress={() => {
            setIsBottomSheetShown(isBottomSheetShown ? false : true);
          }}
        />
      ),
    });

    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      {isBottomSheetShown && (
        <ChatOptions
          isVisible={isBottomSheetShown}
          onPress={() => {
            setIsBottomSheetShown(false);
          }}
        />
      )}
    </View>
  );
}
