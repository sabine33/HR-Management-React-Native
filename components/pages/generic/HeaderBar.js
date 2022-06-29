import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

export class HeaderBar extends React.Component {
  _goBack = () => console.log("Went back");

  _handleSearch = () => console.log("Searching");

  _handleMore = () => console.log("Shown more");

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction icon="back" onPress={this._goBack} />
        <Appbar.Content title={this.props.title || "EMPTY"} />
        <Appbar.Action icon="camera" onPress={this._handleSearch} />
        <Appbar.Action icon="plus-circle-outline" onPress={this._handleMore} />
        <Appbar.Action icon="magnify" onPress={this._handleMore} />
      </Appbar.Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#32446a",
  },
});
