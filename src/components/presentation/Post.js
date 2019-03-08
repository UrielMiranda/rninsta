import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import config from "../../config";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: 0,
      like: false
    };
    this.liked = this.liked.bind(this);
  }

  componentDidMount() {
    this.setState({ screenWidth: Dimensions.get("window").width });
  }

  liked() {
    this.setState({ like: !this.state.like });
    console.log(this.state.like);
  }
  render() {
    const data = this.props.data;
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const likeColor = this.state.like ? "rgb(253,61,57)" : null;
    return (
      <View
        style={{
          flex: 1,
          width: 100 + "%"
        }}
      >
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.picUser}
              source={{
                uri:
                  "https://instagram.fmex4-2.fna.fbcdn.net/vp/2d971085bdbf342c6dce598c67479d64/5D281476/t51.2885-19/s150x150/44899805_446421822550899_7063496519147585536_n.jpg?_nc_ht=instagram.fmex4-2.fna.fbcdn.net"
              }}
            />
            <Text>Nekro</Text>
          </View>
          <Text style={{ marginRight: 10, alignItems: "center" }}>...</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.liked}>
            <Image
              style={{ width: this.state.screenWidth, height: imageHeight }}
              source={{
                uri: data.url
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.actions}>
          <Image
            style={[styles.icon, { tintColor: likeColor }]}
            source={config.images.heart}
          />
          <Image
            style={[
              styles.icon,
              { width: 22, height: 22, marginLeft: 10, marginRight: 10 }
            ]}
            source={config.images.chat}
          />
          <Image style={styles.icon} source={config.images.send} />
        </View>
      </View>
    );
  }
}

export default Post;

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
