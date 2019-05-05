import React from 'react';
import { LinearGradient } from 'expo';
import Config from '../Config';

import { 
  Entypo, 
  Ionicons, 
  MaterialIcons, 
  MaterialCommunityIcons,
  SimpleLineIcons
 } from '@expo/vector-icons';

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


 class DetailsMovie extends React.Component {

   constructor(props) {
     super(props);
     this.state= {
        isLoading: true,
        dataSource: [],
        id:""
     }
   }

  componentDidMount() {

    console.log('>> DetailsMovie#componentDidMount');
    const url = `https://api.themoviedb.org/3/movie/${this.props.navigation.state.params.id}/videos?api_key=${Config.API_KEY}`;
    console.log('DetailsMovie#componentDidMount//url: ', url)
    console.log('DetailsMovie#componentDidMount//this.props.navigation.state.params.id: ', this.props.navigation.state.params.id)

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('DetailsMovie#Popular#componentDidMount data: ', data);

        this.setState({
          isLoading: false,
          dataSource: data.results[1]
        })

        .catch((error) => {
          console.error(error);
      });
      console.log('<< DetailsMovie#componentDidMount');
    });
  }



  render() {
    const {
      id,
      vote_average,
      title,
      backdrop_path,
      overview,
      release_date,
      genre_ids,
    } = this.props.navigation.state.params;
    const {dataSource} = this.state;
    console.log('DetailsMovie#render()//dataSource.key: ', dataSource.key)
    console.log('>> DetailsMovie#render()');
    console.log('DetailsMovie#render()/this.props ', this.props);
    console.log('DetailsMovie#render()/this.props.navigation.state.params ', this.props.navigation.state.params)

    /////////////////////////////////////////
    /////////[ TARGET ANNEE UNIQUEMENT]//////
    let getDate = release_date;
    let date = getDate.slice(0, 4);
    /////////////////////////////////////////

    /////////////////////////////////////////
    /////////[ P O U R C E N T A G E]//////
    let getVote = vote_average;
    let result = getVote / 10 * 100;
    let rating = Math.round(result)
    /////////////////////////////////////////
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    // const keys = Object.keys(this.props);

    if(this.state.isLoading) {

      return (
        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>

          <ActivityIndicator/> 

        </View>
      );

    } else {

      return (
        <ScrollView style={Styles.container}>
          {/* {keys.map(k => {
            return (
              <Text>{k}: {this.props[k].toString()}</Text>
            );
          })}  */}
            <ImageBackground 
              source={{uri: `https://image.tmdb.org/t/p/w500${backdrop_path}` }}
              resizeMode= 'cover'
              style={Styles.imBg}>

              <LinearGradient 
              colors={['rgba(19,19,19,0.8)','transparent','rgba(19,19,19,0.98)']} 
              style={Styles.linearG}>  


                <View style={Styles.box_1}>
                
                  <TouchableOpacity
                  style={Styles.backIcon}
                  onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-arrow-round-back" size={35} color="#fff" />  
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>  navigate('Player', {...dataSource})}>
                    <MaterialIcons name="play-circle-outline" size={70} color="rgba(255, 255, 255, 0.5)"/>   
                  </TouchableOpacity>      
                </View>

              </LinearGradient>
            
            </ImageBackground>

          <View style={Styles.box_2}> 

            <Text style={Styles.title}>{title}</Text>
            <View style={Styles.info}>
              {/* <AntDesign name="like1" size={15} color="#dedede" />  */}
              <Text style={Styles.percentage}>Recommandé à {rating}%</Text>   
              <Text style={Styles.infoText}>{date}</Text>          
              <View style={Styles.btnHdr}>
                <MaterialCommunityIcons name="hdr" size={25} color="#000" />    
              </View>    
          </View>
            <Text style={Styles.description}>{overview}</Text>
          </View>

          <View style={Styles.box_3}>
            <TouchableOpacity style={Styles.blockIcons}>
              <Entypo name="plus" size={30} color="#fff" />    
              <Text style={Styles.blockIconText}>Ma liste</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.blockIcons}>
                <SimpleLineIcons name="like" size={30} color="#fff" /> 
                <Text style={Styles.blockIconText}>Evaluer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.blockIcons}>
                <Ionicons name="md-share" size={30} color="#fff" /> 
                <Text style={Styles.blockIconText}>Partager</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      )
    }
  }
}
export default withNavigation(DetailsMovie);  

//////////////////////////////////////////////////////////////////////////////
//////////////////////////[ S T Y L E S ]/////////////////////////////

const Styles = StyleSheet.create({
  container: {
    flex:1
  },
  box_1: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  box_2: {
    paddingLeft: 10,
  },
  backIcon: {
    position:"absolute",
    top: 20,
    left: 10,
  },
  linearG: {
    width:  Dimensions.get('screen').width,
    height: "100%",
  },
  imBg: {
    zIndex: 2,
    width: "100%",
    height: 280,
  },
  imBg_2: {
    flex:1,
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    width:Dimensions.get('screen').width,
    height: 280,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"
  },
  info: {
    flexDirection: "row",
    paddingVertical: 10
  },
  percentage: {
    color: "#00fa18",
    fontWeight: "bold",
    fontSize: 16
  },
  infoText: {
    color: "#565656",
    paddingLeft: 20
  },
  btnHdr: {
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor:"rgba(69,69,69,0.9)",
    width: 30,
    height: 18 ,
    borderRadius: 4
  },
  description: {
    color: "#fff",
    fontSize: 14,
    letterSpacing: 0.5,
    lineHeight: 25
  },
  box_3: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center', 
  },
  blockIcons: {
    alignItems:"center",
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  blockIconText: {
    position: "relative",
    bottom: -5,
    color: "#fff"
  }
})
