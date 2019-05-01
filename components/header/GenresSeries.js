import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


class Genres extends React.Component {
  render() {
    return (
      <View style={Styles.container}>

          <Text style={Styles.textes}>Drama</Text>
          <FontAwesome name="circle" size={6} color="#fafafa" style={{paddingTop: 6}}/>
          <Text style={Styles.textes}>Fantasy</Text>
          <FontAwesome name="circle" size={6} color="#fafafa" style={{paddingTop: 6}}/>
          <Text style={Styles.textes}>Horror</Text>

      </View>
    )
  }
}
export default Genres;

const Styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-around",
        // alignItems: "center",
    },
    textes: {
        color: "#fff",
        paddingLeft: 10,
        paddingRight: 10,
    }
});