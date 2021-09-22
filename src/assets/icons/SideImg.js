import React, { Component } from 'react';
import {View, Image } from 'react';



class SideImg extends Component {
  render() {
    return (
      <View >
        <Image
          source={{uri: 'LoginSide.png'}}
        />
      </View>
    );
  }
}

export default SideImg;