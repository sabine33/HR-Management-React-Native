import React from "react";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { Text, StyleSheet, View, Image } from "react-native";
import { colors, images } from "../generic/GlobalStyles";

import Ionicons from "react-native-vector-icons/Ionicons";
function NewsCard({ navigation, news }) {
  return (
    <View
      style={
        {
          // flex: 1,
        }
      }
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image source={images.dummy} />
        <View>
          <Text>Eliza Khanal</Text>
          <Text>10:24AM</Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            padding: 5,
            color: colors.primaryColor,
          }}
        >
          Ut necessitatibus ut praesentium qui et corrupti quae. Accusamus est
          praesentium impedit vel non eaque. Quis perferendis incidunt ipsa.
          Commodi et quo sapiente sit.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: colors.primaryColor }}>20</Text>
        <Ionicons name="ios-heart" size={30} color="#ee2f32" />
        <Text style={{ fontSize: 20, marginLeft: 15 }}>5</Text>
        <Ionicons name="ios-chatbubble" size={30} style={{ padding: 5 }} />
      </View>
    </View>
  );
}

export function SwiperCard({ navigation }) {
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          padding: 10,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text>News</Text>
          <Text>View All</Text>
        </View>
        <CardStack
          disableBottomSwipe={true}
          disableTopSwipe={true}
          ref={(swiper) => {
            // this.swiper = swiper;
          }}
          disableBottomSwipe={true}
          disableTopSwipe={true}
          disableRightSwipe={true}
          renderNoMoreCards={() => false}
        >
          {[1, 2, 3, 4, 5].map((x) => {
            return (
              <Card
                style={{ ...styles.card, ...{ marginTop: x * 10 } }}
                key={x}
              >
                <NewsCard />
              </Card>
            );
          })}
        </CardStack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
    elevation: 20,
  },
});
