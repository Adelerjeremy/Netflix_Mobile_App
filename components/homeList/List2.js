import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer, withNavigation } from 'react-navigation';



class List2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          dataSource: [],

        }
    }




    render() {

      const { navigate } = this.props.navigation;
      const {dataSource} = this.props;

        return (
  
          <View style={Styles.container}>
  
            <Text style={Styles.texte}>Tendances actuelles</Text>
  
            <View style={Styles.row}>
     
              <FlatList
                ItemSeparatorComponent={() => (
                  <View style={{width:10}}/>
                )}
                horizontal
                style={{zIndex: 10}}
                keyExtractor={item => item.id.toString()}
                data={dataSource}
                renderItem={({item, separators}) => (
                  <View>
                    <TouchableOpacity  onPress={() => {
                     navigate('DetailsMovie', {...item}) 
                     }}>
                      <Image 
                        style={{width:120, height: 180}}
                        source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
                      />  
                    </TouchableOpacity>
                  </View>
                )}/>
        
                
            </View>
  
          </View>
        )
      }
    }
  
export default withNavigation(List2);

const Styles = StyleSheet.create({
  container: {
    flex: 1 ,
    position: "relative",
    top: -18,
    left: 0,
  },
  row: {
    justifyContent: "center",
    alignItems: 'center',
  },
  texte: {
    textAlign: "left",
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fafafa",
  }

});