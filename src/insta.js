import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "./config";
import { MainFeed } from "./components/screens";

class Insta extends Component {



  render() {

    return (
      <View style={styles.container}>
        <MainFeed />
      </View>
    );
  }
}

export default Insta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
    // alignItems: "center",
    // justifyContent: "center"
  },
  tempNav: {
    width: 100 + "%",
    height: 56,
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  icon: {
    width: 25,
    height: 25
  },
  tv: {
    flexDirection: "row",
    marginRight: 10
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10
  },
  picUser: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10
  },
  userBar: {
    width: 100 + "%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  }
});
