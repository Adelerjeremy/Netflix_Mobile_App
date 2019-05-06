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
        dataSourceVideos: [],
        dataSourceCredits: [],
        id:""
     }
   }

  componentDidMount() {
    console.log('>> DetailsMovie#componentDidMount');

     /////////////////////////////[ U R L S ]//////////////////////////////////////
    const urlCredit = `https://api.themoviedb.org/3/movie/${this.props.navigation.state.params.id}/credits?api_key=${Config.API_KEY}`;
    const urlVideo = `https://api.themoviedb.org/3/movie/${this.props.navigation.state.params.id}/videos?api_key=${Config.API_KEY}`;

    //---------------------------------------------------------------------------->

    console.log('DetailsMovie#componentDidMount//urlVideo: ', urlVideo);
    console.log('DetailsMovie#componentDidMount//urlCredit: ', urlCredit);
    console.log('DetailsMovie#componentDidMount//this.props.navigation.state.params.id: ', this.props.navigation.state.params.id)
    //---------------------------------------------------------------------------->

    /////////////////////////////[ F E T C H : V I D E O S ]/////////////////////////////////
      fetch(urlVideo)
        .then(res => res.json())
        .then(data => {
          console.log('DetailsMovie#componentDidMount//urlVideos data: ', data);
          this.setState({
            isLoading: false,
            dataSourceVideos: data.results[0]
          })
          .catch((error) => {
            console.error(error);
        });
        console.log('<< DetailsMovie#componentDidMount//urlVideo');
      });
    /////////////////////////////[ F E T C H : C R E D I T S ]/////////////////////////////////
      fetch(urlCredit)
      .then(res => res.json())
      .then(data => {
        console.log('DetailsMovie#componentDidMount//urlCredits data: ', data);
        this.setState({
          isLoading: false,
          dataSourceCredits: {

            data_1: data.cast[0].name,
            data_2: data.cast[1].name,
            data_3: data.cast[2].name,
            data_4: data.crew[0].name,
            data_5: data.crew[1].name

          }
        })
        .catch((error) => {
          console.error(error);
      });
      console.log('<< DetailsMovie#componentDidMount//urlCredits');
    });

  } //=> END componentDidMount()



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
    const { dataSourceVideos, dataSourceCredits,data_1  } = this.state;

    ///////////////////////////////////////////////////////
    //////////////////[ A C T O R S ]/////////////////////
    const actor_1 = dataSourceCredits.data_1;
    console.log('DetailsMovie#render()//actor_1 ', actor_1)
    const actor_2 = dataSourceCredits.data_2;
    console.log('DetailsMovie#render()//actor_2 ', actor_2)
    const actor_3 = dataSourceCredits.data_3;
    console.log('DetailsMovie#render()//actor_3 ', actor_3)
    ///////////////////////////////////////////////////////
  
    ///////////////////////////////////////////////////////
    /////////////////[ C R E A T O R S ]///////////////////
    const creator_1 = dataSourceCredits.data_4;
    console.log('DetailsMovie#render()//creator_1 ', creator_1)
    const creator_2 = dataSourceCredits.data_5;
    console.log('DetailsMovie#render()//creator_2 ', creator_2)
     ///////////////////////////////////////////////////////

    console.log('DetailsMovie#render()//dataSource.key: ', dataSourceVideos.key)
    console.log('>> DetailsMovie#render()');
    console.log('DetailsMovie#render()/this.props ', this.props);
    console.log('DetailsMovie#render()/this.props.navigation.state.params ', this.props.navigation.state.params)

    /////////////////////////////////////////
    ///////////////[ D A T E ]//////////////
    let getDate = release_date;
    let date = getDate.slice(0, 4);
    /////////////////////////////////////////

    /////////////////////////////////////////
    /////////[ P O U R C E N T A G E ]//////
    let getVote = vote_average;
    let result = getVote / 10 * 100;
    let rating = Math.round(result)
    /////////////////////////////////////////

    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const item = navigation.getParam("item");
  

    if(this.state.isLoading) {

      return (
        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>

          <ActivityIndicator/> 

        </View>
      );

    } else {

      return (
        <ScrollView style={Styles.container}>
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
                    onPress={() =>  navigate('Player', {...dataSourceVideos})}>
                    <MaterialIcons name="play-circle-outline" size={70} color="rgba(255, 255, 255, 0.5)"/>   
                  </TouchableOpacity>      
                </View>

              </LinearGradient>
            
            </ImageBackground>

          <View style={Styles.box_2}> 

            <Text style={Styles.title}>{title}</Text>

            <View style={Styles.info}>

              <Text style={Styles.percentage}>Recommandé à {rating}%</Text>   
              <Text style={Styles.infoText}>{date}</Text>  

              <View style={Styles.btnHdr}>
                <MaterialCommunityIcons name="hdr" size={25} color="#000" />    
              </View>  
          </View>

            <Text style={Styles.description}>{overview}</Text>

            <View style={Styles.personality}>
              <Text style={Styles.description}>Avec: {actor_1}, {actor_2}, {actor_3}</Text>
              <Text style={Styles.description}>Créateurs: {creator_1}, {creator_2}</Text>
            </View>
          </View>

          <View style={Styles.box_3}>
            <TouchableOpacity style={Styles.blockIcons}>
              <Entypo name="plus" size={25} color="#fff" />    
              <Text style={Styles.blockIconText}>Ma liste</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.blockIcons}>
                <SimpleLineIcons name="like" size={25} color="#fff" /> 
                <Text style={Styles.blockIconText}>Evaluer</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.blockIcons}>
                <Ionicons name="md-share" size={25} color="#fff" /> 
                <Text style={Styles.blockIconText}>Partager</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.separator}>
            <Text style={Styles.ongletsContainer}></Text>
            <Text style={Styles.onglet_title}>TITRES SIMILAIRES</Text>
            <Text style={[Styles.description, Styles.space]}>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</Text>
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
    color: "#ddd",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20
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
  },
  personality: {
    paddingTop: 10,
  },
  separator: {
    borderTopColor: "#000",
    borderTopWidth: 2.5,
    borderStyle: "solid"
  },
  space: {
    paddingTop: 30,
  },
  ongletsContainer: {
    width: "40%",
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
  }

})
