import React, { Component } from "react";
import { FlatList } from "react-native";
import Post from "../presentation/Post";

class PostFeed extends Component {

    _renderItem({item}){
        return <Post data={item}/>
    }

    _keyExtractor(item){
        return item.id.toString();
    }

  render() {
    return (
      <FlatList
        data={[
          {
            id: 1,
            url:
              "https://instagram.fmex4-1.fna.fbcdn.net/vp/80ad287159068a7bbd33ca7171088e10/5D27891E/t51.2885-15/sh0.08/e35/p750x750/44532412_2182580785291403_2359916433607253042_n.jpg?_nc_ht=instagram.fmex4-1.fna.fbcdn.net"
          },
          {
            id: 2,
            url:
              "https://instagram.fmex4-1.fna.fbcdn.net/vp/5ed02b37af7180514b9630258a57161d/5D1A198C/t51.2885-15/fr/e15/p1080x1080/54247395_304854300225998_3389911602374155897_n.jpg?_nc_ht=instagram.fmex4-1.fna.fbcdn.net"
          },
          {
            id: 3,
            url:
              "https://instagram.fmex4-1.fna.fbcdn.net/vp/708c4666dfd55f8fc5e6e7dd7532060a/5D0A3870/t51.2885-15/sh0.08/e35/s750x750/51536044_2280917355291862_3011579581991008428_n.jpg?_nc_ht=instagram.fmex4-1.fna.fbcdn.net"
          }
        ]}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default PostFeed;
