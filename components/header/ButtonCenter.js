import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Entypo, Ionicons } from '@expo/vector-icons';


class ButtonCenter extends React.Component {
  render() {
    return (
      <View style={Styles.container}>

        <View style={Styles.sideBtn}>
          <Entypo name="plus" size={25} color="#fff" />    
          <Text style={Styles.texte}>Ma liste</Text>
        </View>
 
        <Button  
        icon = {
          <Icon
            name="play"
            size={18}
            color="#000"
            style={{paddingRight: 5}}
          />
        }
        title="Lecture"
        titleStyle={{color: "#000", paddingLeft: 5, fontSize: 16 }}
        buttonStyle={{ backgroundColor: '#fff', width:115}} 
        containerStyle={{ paddingLeft: 10, paddingRight: 10}}
        />

        <View style={Styles.sideBtn}>
          <Ionicons name="ios-information-circle-outline" size={25} color="#fff" />    
          <Text style={Styles.texte}>Infos</Text>
        </View>
        
     
      </View>
    )
  }
}
export default ButtonCenter;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    top: -175,
 
  },
  sideBtn:{
    alignItems:"center",
    position: "relative",
    top:-5
  },
  texte: {
    color:"#fff"
  }
});