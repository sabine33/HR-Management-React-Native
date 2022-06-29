import { Thumbnail, Icon } from "native-base";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import {
  NativeViewGestureHandler,
  ScrollView,
} from "react-native-gesture-handler";
import { THUMB_URL } from "../../../helpers";
import { colors } from "../generic/GlobalStyles";

export class SingleNewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.navigation.setOptions({
      headerTitle: "News Headline",
    });
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View>
          <NewsItem />
          <Text style={{ marginVertical: 20 }}>Comments</Text>
          <Text style={{ fontWeight: "bold" }}>No Comments Found</Text>
        </View>

        <CommentBox />
      </View>
    );
  }
}
function CommentBox({}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          elevation: 10,
        }}
      >
        <TextInput
          placeholder="type a comment"
          style={{
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
        />
      </View>
      <Icon
        name="share"
        color={colors.secondary}
        size={20}
        style={{
          backgroundColor: colors.secondary,
          padding: 8,
          color: "#fff",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 90,
          marginLeft: 10,
          elevation: 10,
        }}
      />
    </View>
  );
}

function NewsItem({ navigation, news }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingVertical: 10,
        elevation: 10,
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Thumbnail source={{ uri: THUMB_URL }} size={30} resizeMode="center" />
        <View style={{ marginHorizontal: 15, justifyContent: "center" }}>
          <Text>Eliza Khanal</Text>
          <Text>10:24AM</Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            padding: 5,
            textAlign: "justify",
          }}
        >
          She's one of Europe's most powerful women. A vaccine spat could derail
          her big plans for the continent. It's likely that, a couple of weeks
          ago, you'd never heard the name Ursula von der Leyen.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: colors.primaryColor,
            marginHorizontal: 10,
          }}
        >
          20
        </Text>
        <Icon name="heart" size={25} style={{ color: colors.primaryColor }} />
        <Text style={{ fontSize: 15, marginHorizontal: 10 }}>0</Text>
        <Icon
          name="chatbubble"
          size={25}
          style={{ padding: 5, color: colors.primaryColor }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
