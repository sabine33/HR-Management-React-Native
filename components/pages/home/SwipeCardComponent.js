import React, { Component } from "react";
import Swiper from "react-native-deck-swiper"; // 1.2.8
import { StyleSheet, View, Text, Image, Button, Alert } from "react-native";
import { Constants, Facebook, Google } from "expo";
const { width } = 10;
export default class SwipeCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: ["1", "2", "3", "4", "5"],
      swipedAllCards: false,
      swipeDirection: "",
      isSwipingBack: false,
      cardIndex: 0,
      cardNum: 0,
      url:
        "http://www.seriouseats.com/recipes/images/2016/03/20160324-aquafaba-pancake-oatmeal-vegan-21-1500x1125.jpg",
    };
  }

  renderCard = (card) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{this.state.cardNum}</Text>
      </View>
    );
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  swipeBack = () => {
    if (!this.state.isSwipingBack) {
      this.setIsSwipingBack(true, () => {
        this.swiper.swipeBack(() => {
          this.setIsSwipingBack(false);
        });
      });
    }
  };

  setIsSwipingBack = (isSwipingBack, cb) => {
    this.setState(
      {
        isSwipingBack: isSwipingBack,
      },
      cb
    );
  };

  jumpTo = () => {
    this.swiper.jumpToCardIndex(0);
  };
  onSwiped = () => {
    var test = returnURL();
    this.setState({
      cardNum: this.state.cardNum + 1,
      url: test,
    });
  };
  onTapCard = () => {
    this.setState({
      cardNum: this.state.cardNum + 1,
    });
  };

  _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        "1201211719949057", // Replace with your own app id in standalone app
        { permissions: ["public_profile"] }
      );

      switch (type) {
        case "success": {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`
          );
          const profile = await response.json();
          Alert.alert("Logged in!", `Hi ${profile.name}!`);
          break;
        }
        case "cancel": {
          Alert.alert("Cancelled!", "Login was cancelled!");
          break;
        }
        default: {
          Alert.alert("Oops!", "Login failed!");
        }
      }
    } catch (e) {
      Alert.alert("Oops!", "Login failed!");
    }
  };

  _handleGoogleLogin = async () => {
    try {
      const { type, user } = await Google.logInAsync({
        androidStandaloneAppClientId: "<ANDROID_CLIENT_ID>",
        iosStandaloneAppClientId: "<IOS_CLIENT_ID>",
        androidClientId:
          "603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com",
        iosClientId:
          "603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      switch (type) {
        case "success": {
          Alert.alert("Logged in!", `Hi ${user.name}!`);
          break;
        }
        case "cancel": {
          Alert.alert("Cancelled!", "Login was cancelled!");
          break;
        }
        default: {
          Alert.alert("Oops!", "Login failed!");
        }
      }
    } catch (e) {
      Alert.alert("Oops!", "Login failed!");
    }
  };

  state = {
    id: 0,
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          ref={(swiper) => {
            this.swiper = swiper;
          }}
          goBackToPreviousCardOnSwipeRight={false}
          showSecondCard={true}
          onSwiped={() => {
            this.setState({ id: id++ });
          }}
          onTapCard={() => {
            console.log("left");
          }}
          cardIndex={this.state.id}
          cards={this.state.cards}
          renderCard={this.renderCard}
          verticalSwipe={false}
          cardVerticalMargin={5}
          cardHorizontalMargin={5}
          onSwipedAll={() => {}}
          cardStyle={{ height: 100 }}
        ></Swiper>
      </View>
    );
  }
}
function returnURL() {
  var test = "https://i.ytimg.com/vi/7ebZWviUfUA/maxresdefault.jpg";
  return test;
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  swiper: {
    paddingTop: 100,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
  },

  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent",
  },
  image: {
    width,
    flex: 3,
  },
});
