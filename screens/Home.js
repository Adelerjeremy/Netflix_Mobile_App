import React from 'react';
import Hero from '../components/header/Hero';//====>   HERO Series
import List1 from '../components/homeList/List1';
import List2 from '../components/homeList/List2';
import List3 from '../components/homeList/List3';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, StatusBar,} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';


class Home extends React.Component {

  render() {
    return (
 
         <ScrollView>
      
          <Hero />  
       
      
        <View style={Styles.container}>
          
          <List1 />  
          <List2 /> 
          <List3 /> 

        </View>
        
      </ScrollView>
     
      
    )
  }
}
export default Home;

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
  }
});