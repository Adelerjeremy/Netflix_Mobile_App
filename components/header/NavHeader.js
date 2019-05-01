import React from 'react';
import Home from '../../screens/Home';
import Series from '../../screens/Series';
import Movies from '../../screens/Movies';
import MaListe from '../../screens/MaListe';
import { StyleSheet, View, Text, FlatList, Image, ImageBackground, TouchableOpacity , ActivityIndicator } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

class NavHeader extends React.Component {
  render() {
    return (
      <View style={Styles.div}>



      </View>
    )
  }
}

export default NavHeader;


const Styles = StyleSheet.create({  
  div: {
    flex: 1,
    zIndex: 2,
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent:"space-around"
  },
  links:{
    flex:1,
    paddingTop: 16,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent:"space-around"
  },
  textes: {
    color: "#fafafa",
    fontSize: 18,
    alignItems: "flex-start"
  }
});