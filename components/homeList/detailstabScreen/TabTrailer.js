import React from 'react';
import { LinearGradient } from 'expo';
import { withNavigation } from 'react-navigation';
import { 
    StyleSheet,
    View, 
    ScrollView,
    Text, 
    ActivityIndicator,
    ImageBackground, 
    Dimensions,
    TouchableOpacity } from 'react-native';
import { 
  Entypo, 
  Ionicons, 
  MaterialIcons, 
  MaterialCommunityIcons,
  SimpleLineIcons } from '@expo/vector-icons';
  

 class TabTrailer extends React.Component {
  render() {
      const {
          poster_path,
          title,
          genre_1,
          genre_2,
          genre_3,
          date
      } = this.props;

    const { dataSourceTrailers } = this.props;
    const { navigate, goBack } = this.props.navigation;
    const { navigation } = this.props;

    return (
        <ScrollView>

            <View style={Styles.box}>

                <ImageBackground 
                    source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
                    resizeMode= 'cover'
                    style={Styles.trailerbg}>

                    <LinearGradient 
                    colors={['rgba(19,19,19,0.5)','transparent','rgba(19,19,19,0.5)']} 
                    resizeMode="cover"
                    style={Styles.linearGTrailer}>  

                    <View style={Styles.box_1}>
                        <TouchableOpacity
                        onPress={() =>  navigate('PlayerTrailer', {...dataSourceTrailers})}>
                        <MaterialIcons name="play-circle-outline" size={60} color="rgba(255, 255, 255, 0.8)"/>   
                        </TouchableOpacity>      
                    </View>
                    </LinearGradient>      

                </ImageBackground>

                <View style={{ alignSelf:"center", alignItems:"center" }}>
                    <Text style={Styles.trailer_Title}>Watch</Text>
                    <View style={{ alignItems:"center" }}>
                        <Text style={Styles.trailer_Text}>{title}</Text>
                        <Text style={[Styles.trailer_Text,{fontSize: 11}]}>{genre_1}, {genre_2}, {genre_3}</Text>
                        <Text style={Styles.trailer_Text}>{date}</Text>
                    </View>
                </View>

            </View>

        </ScrollView>
    )
  }
}
export default withNavigation(TabTrailer);

//////////////////////////////////////////////////////////////////////////////
//////////////////////////[ S T Y L E S ]/////////////////////////////

const Styles = StyleSheet.create({
    container: {
      flex:1
    },
    box: {
      flex: 1,
      justifyContent: 'space-around'
    },
    box_1: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
    },
    linearGTrailer: {
      width: "100%",
      height: 160
    },
    trailerbg: {
      zIndex: 2,
      width: Dimensions.get('screen').width,
      height: 160,
    },
    space: {
      paddingBottom: 30,
    },
    ongletsContainer: {
      width: "30%",
      marginLeft: 10,
      borderTopColor: "#E50914",
      borderTopWidth: 4,
      borderStyle: "solid",
    },
    onglet_title: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
      paddingLeft: 10
    },
    trailer_Title: {
      fontSize: 18,
      color: "#E50914",
      fontWeight: "bold"
    },
    trailer_Text: {
      color: "#ddd"
    }
  
  })