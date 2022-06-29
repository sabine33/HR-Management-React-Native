import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export function WhatsNewPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ headerTitle: "New Features" });
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 15,
        }}
      >
        PieHRM has many new features.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
});
