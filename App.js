import React from 'react';
import Home from './screens/Home';
import Series from './screens/Series';
import Movies from './screens/Movies';
import MaListe from './screens/MaListe';
import DetailsMovie from './screens/DetailsMovie';
import DetailsSerie from './screens/DetailsSerie';
import PlayerStream from './screens/PlayerStream';
import PlayerTrailer from './screens/PlayerTrailer';

import { 
  Button, 
  Text, 
  View,
  TouchableOpacity,
  StyleSheet, 
  StatusBar, 
  Image, 
  ScrollView,
  Dimensions} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { ScreenOrientation } from 'expo';




console.disableYellowBox = true; // Disable React Native Warning bottom box

const ORIENTATION_DEFAULT = Expo.ScreenOrientation.Orientation.ALL;
const ORIENTATIONS = {
  'portrait': Expo.ScreenOrientation.Orientation.PORTRAIT,
  'landscape': Expo.ScreenOrientation.Orientation.LANDSCAPE,
  'default': ORIENTATION_DEFAULT,
};
//////////////////////////////////////////////////////////////////////////////
//////////////////////////[ H O M E]/////////////////////////////

class HomeScreen extends React.Component {

  static navigationOptions = {
   //To hide the NavigationBar from current Screen
   header: null
 };

   componentDidMount() {
     //To hide all status bar Screen
     StatusBar.setHidden(true);
   }

 render() {
   return (
  
     <View >

      <Home />  

      <View style={{position: "absolute", top: 10, right: 0}}>
        <View style={{flexDirection: "row", justifyContent: 'center'}}>

          <TouchableOpacity 
            style={Styles.button}
            onPress={() => this.props.navigation.navigate("Home")} >

            <Image 
            style={{width: 50, height: 50, position: "relative", top: -15, left:5}} 
            source={{uri: `https://res.cloudinary.com/dfc5jnbxg/image/upload/v1553629074/Portfolio%20Adflix/logo-de-netflix.png`
            }}
            />
            </TouchableOpacity>

            <TouchableOpacity 
            style={Styles.button}
            onPress={() => this.props.navigation.navigate("Series")} >

              <Text style={Styles.textes}>Series</Text>
                
            </TouchableOpacity>

              <TouchableOpacity
              style={Styles.button}          
              onPress={() => this.props.navigation.navigate("Movies")} >  

                <Text style={Styles.textes}>Movies</Text>

              </TouchableOpacity>

              <TouchableOpacity
              style={Styles.button}
              onPress={() => this.props.navigation.navigate("MaListe")} >

                <Text style={Styles.textes}>Ma liste</Text>
              
            </TouchableOpacity>
 
          </View>
        </View> 
     </View>
  
   );
 }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////[ S E R I E S]/////////////////////////////

class SeriesScreen extends React.Component {
    static navigationOptions = {
   //To hide the NavigationBar from current Screen
   header: null,
   headerMode: 'none',
 };
 render() {
   return (
  
        <View >

          <Series />  

          <View style={{position: "absolute", top: 10, right: 0}}>
          <View style={{flexDirection: "row", justifyContent: 'center'}}>

            <TouchableOpacity 
              style={Styles.button}
              onPress={() => this.props.navigation.navigate('Home')} >

              <Image 
              style={{width: 50, height: 50, position: "relative", top: -15, left:5}} 
              source={{uri: `https://res.cloudinary.com/dfc5jnbxg/image/upload/v1553629074/Portfolio%20Adflix/logo-de-netflix.png`
              }}
              />
              </TouchableOpacity>

              <TouchableOpacity 
              style={Styles.button}
              onPress={() => this.props.navigation.navigate('Series')} >

                <Text style={Styles.textes}>Series</Text>
                  
              </TouchableOpacity>

                <TouchableOpacity
                style={Styles.button}          
                onPress={() => this.props.navigation.navigate('Movies')} >  

                  <Text style={Styles.textes}>Movies</Text>

                </TouchableOpacity>

                <TouchableOpacity
                style={Styles.button}
                onPress={() => this.props.navigation.navigate('MaListe')} >

                  <Text style={Styles.textes}>Ma liste</Text>
                
                </TouchableOpacity>
              </View>
              </View>

        
     </View>
    
   );
 }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////[ M O V I E S]/////////////////////////////

class MoviesScreen extends React.Component {
    static navigationOptions = {
   //To hide the NavigationBar from current Screen
   header: null
 };
 render() {
   return (
      <View>

        <Movies />

        <View style={{position: "absolute", top: 10, right: 0}}>
          <View style={{flexDirection: "row", justifyContent: 'center'}}>

            <TouchableOpacity 
              style={Styles.button}
              onPress={() => this.props.navigation.navigate('Home')} >

              <Image 
              style={{width: 50, height: 50, position: "relative", top: -15, left:5}} 
              source={{uri: `https://res.cloudinary.com/dfc5jnbxg/image/upload/v1553629074/Portfolio%20Adflix/logo-de-netflix.png`
              }}
              />
              </TouchableOpacity>

              <TouchableOpacity 
              style={Styles.button}
              onPress={() => this.props.navigation.navigate('Series')} >

                <Text style={Styles.textes}>Series</Text>
                  
              </TouchableOpacity>

                <TouchableOpacity
                style={Styles.button}          
                onPress={() => this.props.navigation.navigate('Movies')} >  

                  <Text style={Styles.textes}>Movies</Text>

                </TouchableOpacity>

                <TouchableOpacity
                style={Styles.button}
                onPress={() => this.props.navigation.navigate('MaListe')} >

                  <Text style={Styles.textes}>Ma liste</Text>
                
                </TouchableOpacity>
              </View>
              </View>

     </View>
   );
 }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////[ M A  L I S T E]/////////////////////////////

class MaListeScreen extends React.Component {
    static navigationOptions = {
   //To hide the NavigationBar from current Screen
   header: null
 };
 render() {
   return (
     <View style={{}}>
        <MaListe/>
     </View>
   );
 }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////[ D E T A I L S : M O V I E ]/////////////////////////////


class DetailsMovieScreen extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };


    componentDidMount() {
      //To hide all status bar Screen
      StatusBar.setHidden(true);
    }
 
  render() {
    return (
      <View style={Styles.detailPage}>
        <DetailsMovie />
      </View>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////[ D E T A I L S : S E R I E ]/////////////////////////////


class DetailsSerieScreen extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };


    componentDidMount() {
      //To hide all status bar Screen
      StatusBar.setHidden(true);
    }
 
  render() {
    return (
      <View style={Styles.detailPage}>
        <DetailsSerie />
      </View>
    );
  }
}




///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////[ P L A Y E R :  S T R E A M I N G ]/////////////////////////////


class PlayerStreamScreen extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
  componentDidMount () {
    StatusBar.setHidden(true);
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
  }
  componentWillUnmount () {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT);
  }
  

 
  render() {
    return (
      <View allow="portrait" style={Styles.playerPage}>
        <PlayerStream />
      </View>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////[ P L A Y E R :  S T R E A M I N G ]/////////////////////////////


class PlayerTrailerScreen extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
  componentDidMount () {
    StatusBar.setHidden(true);
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
  }
  componentWillUnmount () {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT);
  }
  

 
  render() {
    return (
      <View allow="portrait" style={Styles.playerPage}>
        <PlayerTrailer />
      </View>
    );
  }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////[ T R A N S I T I O N ]/////////////////////////////

const FadeTransition = (index, position) => {
  const sceneRange = [index - 1 , index];
  const outputOpacity = [0.5, 1];
  const transiton = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputOpacity,
  });
  return {
    opacity: transiton
  }
}

const LeftTransition = (index, position, height) => {
  const sceneRange = [index - 1 , index, index + 1];
  const outputHeight = [height, 0, 0];
  const transiton = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputHeight
  });

  return {
    transform: [{ translateX: transiton }]
  }
}

const NavigationConfig = () => {
  return {
    screenInterpolator: (sceneProps) => {
      const position = sceneProps.position;
      const scene = sceneProps.scene;
      const index = scene.index;
      const height = sceneProps.layout.initHeight;
      const opacity = sceneProps.layout.initOpacity;
      return LeftTransition(index, position, height, opacity);
    }
  }

}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////[ N A V I G A T I O N ]/////////////////////////////


const HomeStack = createStackNavigator({
 Home: HomeScreen,
 DetailsMovie: DetailsMovieScreen,
 DetailsSerie: DetailsSerieScreen,
 PlayerStream: PlayerStreamScreen,
 PlayerTrailer: PlayerTrailerScreen,
 Series: SeriesScreen,
 Movies: MoviesScreen,
 MaListe: MaListeScreen,    
},{ transitionConfig: NavigationConfig });

const SeriesStack = createStackNavigator({
 Home: HomeScreen,
 DetailsMovie: DetailsMovieScreen,
 DetailsSerie: DetailsSerieScreen,
 PlayerStream: PlayerStreamScreen,
 PlayerTrailer: PlayerTrailerScreen,
 Series: SeriesScreen ,
 Movies: MoviesScreen ,
 MaListe: MaListeScreen
},{ transitionConfig: NavigationConfig });

const MoviesStack = createStackNavigator({
 Home: HomeScreen,
 DetailsMovie: DetailsMovieScreen,
 DetailsSerie: DetailsSerieScreen,
 PlayerStream: PlayerStreamScreen,
 PlayerTrailer: PlayerTrailerScreen,
 Series: SeriesScreen ,
 Movies: MoviesScreen ,
 MaListe: MaListeScreen
},{ transitionConfig: NavigationConfig });

const MaListeStack = createStackNavigator({
 Home: HomeScreen,
 DetailsMovie: DetailsMovieScreen,
 DetailsSerie: DetailsSerieScreen,
 PlayerStream: PlayerStreamScreen,
 PlayerTrailer: PlayerTrailerScreen,
 Series: SeriesScreen ,
 Movies: MoviesScreen ,
 MaListe: MaListeScreen
},{ transitionConfig: NavigationConfig });

const AppContainer = createAppContainer(HomeStack,SeriesStack,MoviesStack,MaListeStack);

export default class App extends React.Component {
 render() {
   return <AppContainer  />;
 }
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////[ S T Y L E S ]/////////////////////////////

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#1b1b1b',
  },
  detailPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#131313',
  },
  playerPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#000',
  },
  button: {
    backgroundColor: 'transparent',
    color: "#000",
    padding: 10,
  },
  textes: {
    fontSize:18, 
    paddingRight: 30,
    color:"#fff"
  }
})
