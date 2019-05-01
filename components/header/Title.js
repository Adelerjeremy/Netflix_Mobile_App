import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';


class Title extends React.Component {

  render() {
    return (
      <View>
          <Image style={{width: 220, height: 100}} source={{uri: 'https://res.cloudinary.com/dfc5jnbxg/image/upload/v1555446260/Netflix-Mobile-App/shazam.png'}}/>
      </View>
    )
  }
}
export default Title;

const Styles = StyleSheet.create({

  });