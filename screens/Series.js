import React from 'react';
import HeroSeries from '../components/header/HeroSeries';//====>   HERO Series
import SeriesList1 from '../components/series/listes/SeriesList1';
import SeriesList2 from '../components/series/listes/SeriesList2';
import SeriesList3 from '../components/series/listes/SeriesList3';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, StatusBar} from 'react-native';


class Series extends React.Component {
  render() {
    return (
  
      <ScrollView >
        
      <HeroSeries />

        <View style={Styles.container}>
          
          <SeriesList1 />  
          <SeriesList2 /> 
          <SeriesList3 /> 

        </View>
        
      </ScrollView>
    
    )
  }
}
export default Series;

const Styles = StyleSheet.create({
  container: {
    flex: 1 ,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#1b1b1b',
  },
  div: {
    paddingTop: 22,
    paddingBottom: 15,
  },
  linearG: {
    flex: 1,
  },
  button: {
    backgroundColor: 'transparent',
    color: "#000",
    padding: 10,
  },
  texte: {
    position: "absolute",
    left: 0,
    right: 0,
    top:0,
    bottom:0,
    margin: "auto",
    flex:1
  }
});