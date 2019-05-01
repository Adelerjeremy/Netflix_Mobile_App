import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';


class Title extends React.Component {

  render() {
    return (
      <View>
          <Image style={{width: 250, height: 100}} source={{uri: 'https://res.cloudinary.com/dfc5jnbxg/image/upload/v1555965923/Netflix-Mobile-App/Avengers_Endgame_Other_Logo.png'}}/>
      </View>
    )
  }
}
export default Title;

