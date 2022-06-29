import { StatusBar } from "expo-status-bar";
import { Container, Content, Fab, Footer, Icon } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Appbar, Card } from "react-native-paper";
import { HeaderBar } from "../generic/HeaderBar";

function AlertItem({}) {
  return (
    <View
      style={{
        elevation: 10,
        padding: 20,
        margin: 10,
      }}
    >
      <Text
        style={{
          fontSize: 16,
        }}
      >
        I am an alert !
      </Text>
    </View>
  );
}

export function DocumentsPage({ navigation }) {
  useEffect(() => {
    // navigation.setOptions({ headerTitle: "Hello", headerShown: true });
  }, []);

  return (
    <Container style={{ flex: 1 }}>
      <Content contentContainerStyle={styles.container}>
        <Image
          source={require("../../../assets/not_found.png")}
          width={100}
        ></Image>
        <Text
          style={
            {
              /*fontSize: 17*/
            }
          }
        >
          No documents found
        </Text>
      </Content>
      <Fab
        direction="up"
        containerStyle={{}}
        style={{ backgroundColor: "#5067FF" }}
        position="bottomRight"
        onPress={() => {
          alert("Clicked");
        }}
      >
        <Icon name="cloud-upload-outline" />
      </Fab>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
