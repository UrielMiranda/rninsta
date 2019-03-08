import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {PostFeed} from "../containers";
import config from "../../config";

class MainFeed extends Component {
    render() {
        return (
           <View>
               <View style={styles.tempNav}>
                   <Image style={styles.icon} source={config.images.camera} />
                   <Text>Instagram</Text>
                   <View style={styles.tv}>
                       <Image style={styles.icon} source={config.images.tv} />
                       <Image
                           style={[styles.icon, { marginLeft: 10 }]}
                           source={config.images.send}
                       />
                   </View>
               </View>
               <PostFeed />
           </View>
        );
    }
}

export default MainFeed;

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
