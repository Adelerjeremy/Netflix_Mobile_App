import React from 'react';
import Hero from '../components/header/Hero';
import SaveList1 from '../components/maliste/listes/SaveList1';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, StatusBar,} from 'react-native';


class MaListe extends React.Component {
  render() {
    return (
      <ScrollView >
       
           <Hero/>  
      
        <View style={Styles.container}>
          
          <SaveList1 />  

        </View>
        
      </ScrollView>
    )
  }
}
export default MaListe;

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