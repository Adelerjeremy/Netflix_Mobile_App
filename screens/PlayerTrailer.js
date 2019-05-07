import React from 'react';
import { LinearGradient } from 'expo';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { 
  StyleSheet,
  View, 
  Dimensions,
  TouchableOpacity,
  WebView } from 'react-native';


class PlayerTrailer extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      isError: false,
    }
  }



  render() {
    console.log('>> PlayerTrailer#render()')
    const { navigation } = this.props;
    const { 
      key
    }= this.props.navigation.state.params;

    console.log('PlayerTrailer#render()//key: ', key)
    console.log('PlayerTrailer#render()//this.props: ', this.props)
    console.log('PlayerTrailer#render()//this.props.key: ', this.props.key)

    const urlTrailer = `https://www.youtube.com/embed/${key}?rel=0&modestbranding=1&autoplay=1&autohide=1&showinfo=0&controls=2&frameborder=0&allowfullscreen&playsinline=1&fs=1&theme=light`
    console.log('PlayerTrailer#render(//urlTrailer : ', urlTrailer);

    if (this.state.isError === true) {
      return <Text>...Loading Error</Text>
    }

    return (
      <View>
        <LinearGradient 
        colors={['rgba(0,0,0,0.6)','rgba(0,0,0,0.3)','transparent']} 
        style={Styles.backIcon}>
          <TouchableOpacity
          style={Styles.icon}
          onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-round-back" size={35} color="#eee" />  
          </TouchableOpacity>
        </LinearGradient>

        <WebView
          style={Styles.container}
          useWebKit={true}
          UIWebViews={true}
          scalesPageToFit
          allowsInlineMediaPlayback={true}
          automaticallyAdjustContentInsets={true}
          mediaPlaybackRequiresUserAction={false}
          frameborder={0}
          allowfullscreen
          source={{ uri: urlTrailer}}
        />
      </View>
    );
  }
}
export default withNavigation(PlayerTrailer);

const Styles = StyleSheet.create({
  container: {
    flex:1,
    width: 680,
    height: Dimensions.get('screen').height,
  },
  backIcon: {
    zIndex:9,
    position:"absolute",
    top: 0,
    left: 0,
    width:"105%", 
    height: 80,
  },
  icon: {
    zIndex:10,
    position:"relative",
    top:0,
    left: 10,
  }
});

// source={{ uri: `https://www.youtube.com/embed/${key}?rel=0&modestbranding=1&autoplay=1&autohide=1&showinfo=0&controls=2&frameborder=0&allowfullscreen&playsinline=1&fs=1&theme=light`}}