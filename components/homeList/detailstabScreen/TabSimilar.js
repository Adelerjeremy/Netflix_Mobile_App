import React from 'react';
import { LinearGradient } from 'expo';
import { withNavigation } from 'react-navigation';
import { 
    StyleSheet,
    View, 
    FlatList,
    ScrollView,
    Text, 
    ActivityIndicator,
    ImageBackground, 
    Image, 
    Dimensions,
    TouchableOpacity } from 'react-native';
import { 
  Entypo, 
  Ionicons, 
  MaterialIcons, 
  MaterialCommunityIcons,
  SimpleLineIcons } from '@expo/vector-icons';
  

  
  const numColumns = 3;

 class TabSimilar extends React.Component {


    
  render() {

    const { dataSourceSimilar } = this.props;
    const { navigate, goBack, push } = this.props.navigation;
    const { navigation } = this.props;

    return (
        <View style={{alignContent:'center',alignItems:'center'}}>
            <FlatList
              ItemSeparatorComponent={() => (
                <View style={{margin:4}}/>
              )}
              style={{zIndex: 10}}
              keyExtractor={item => item.id}
              data={dataSourceSimilar}
              numColumns={numColumns}
              renderItem={({ item }) => (
                    <TouchableOpacity  onPress={() => {
                        push('DetailsMovie', {...item}) 
                    }}>
                    <Image 
                        style={{width: 110, height: 170 ,marginHorizontal: 4}}
                        source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
                    />  
                    </TouchableOpacity>
                )}/>
        </View>
    )
  }
}
export default withNavigation(TabSimilar);

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
    },
    item: {
      backgroundColor: '#4D243D',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 1,
      height: Dimensions.get('window').width / numColumns, // approximate a square
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
  
  })