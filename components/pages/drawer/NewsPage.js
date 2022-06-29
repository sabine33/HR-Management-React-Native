import { Thumbnail } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, RefreshControl } from "react-native";
import {
  NativeViewGestureHandler,
  ScrollView,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { THUMB_URL } from "../../../helpers";
import { colors } from "../generic/GlobalStyles";

export class NewsPage extends React.Component {
  state = {
    refreshing: false,
  };
  componentDidMount() {
    this.props.navigation.setOptions({
      headerTitle: "News",
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoved: false,
    };
  }
  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => {
              this.setState({
                refreshing: true,
              });
            }}
          />
        }
      >
        {[1, 2, 3, 4, 5].map((x) => {
          return <NewsItem navigation={this.props.navigation} key={x} />;
        })}
      </ScrollView>
    );
  }
}

function NewsItem({ navigation, news }) {
  const [isLoved, setIsLoved] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingVertical: 10,
        margin: 20,
        padding: 20,
        elevation: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Thumbnail
          source={{ uri: THUMB_URL }}
          resizeMode="center"
          size={30}
          style={{ color: colors.primaryColor }}
        />
        <View style={{ marginHorizontal: 15, justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Eliza Khanal</Text>
          <Text>10:24AM</Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            padding: 5,
            lineHeight: 20,
          }}
          onPress={() => {
            navigation.push("SingleNews");
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
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            marginHorizontal: 10,
          }}
        >
          20
        </Text>
        <Icon
          name={isLoved ? "heart" : "heart-outline"}
          size={25}
          color="#ee2f32"
          onPress={() => {
            setIsLoved(true);
          }}
        />
        <Text style={{ fontSize: 15, marginHorizontal: 10 }}>5</Text>
        <Icon
          name="comment-outline"
          size={25}
          color="#ee2f32"
          style={{ padding: 5 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
