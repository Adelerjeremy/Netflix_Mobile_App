import React from 'react'
import TitleSeries from './TitleSeries';
import GenresSeries from './GenresSeries';
import NavHeader from './NavHeader';
import ButtonCenter from './ButtonCenter';
import { LinearGradient } from 'expo';
import { StyleSheet,  View, Text, FlatList, Image, ImageBackground, ActivityIndicator } from 'react-native';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  render() {

    return (

      <ImageBackground 
      source={require("./images/img10.jpg")} 
      resizeMode= 'cover'
      style={Styles.imBg}>
      
        <LinearGradient 
        colors={['transparent','rgba(2,2,2,0.4)','rgba(27,27,27,0.8)']} 
        style={Styles.linearG}>

  
           {/* <NavHeader /> */}
  

          <View style={Styles.center}>
            <TitleSeries />
            <GenresSeries style={Styles.genres}/>
            <ButtonCenter style={Styles.btnCenter}/>
          </View>

        </LinearGradient>  
      </ImageBackground>
    )   
  }
}
export default Hero;

const Styles = StyleSheet.create({
  imBg: {
    width: "100%",
    height: 530,
  },
  div: {
    flex: 1,
    zIndex: 2,
    paddingTop: 24,
    flexDirection: 'row',
    justifyContent:"space-around"
  },
  linearG: {
    flex: 1,
  },
  links:{
    flex:1,
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent:"space-around"
  },
  textes: {
    color: "#fafafa",
    fontSize: 18,
    alignItems: "flex-start"
  },
  center: {
    flex: 1,
    alignItems:"center",
    position: "relative",
    top: 250,

  },
  genres: {
    flexDirection: 'row',  
  },
  btnCenter:{
    flexDirection: 'row',  
    
  }
});
