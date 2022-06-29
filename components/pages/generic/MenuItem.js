import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { colors } from "react-native-elements";
export class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
        }}
      >
        {this.props.icon && <Icon name={this.props.icon} size={30} />}
        <Text
          style={{ fontSize: 15 }}
          onPress={() => {
            this.props.onPress();
          }}
        >
          {this.props.title}
        </Text>
        <Icon name="ios-chevron-forward" size={30} color={colors.secondary} />
      </View>
    );
  }
}
