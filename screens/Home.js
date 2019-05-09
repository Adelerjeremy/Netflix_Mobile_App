import React from 'react';
import Config from '../Config';
import Hero from '../components/header/Hero';//====>   HERO Series
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, StatusBar, ActivityIndicator} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import List1 from '../components/homeList/List1';
import List2 from '../components/homeList/List2';
import List3 from '../components/homeList/List3';


class Home extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        dataSourcePop: [],
        dataSourceTop: [],
        dataSourceTv: [],

    }
  }


  componentDidMount() {
    console.log('>> HOME#componentDidMount');

    /////////////////////////////[ U R L S ]//////////////////////////////////////

    const urlPop = `https://api.themoviedb.org/3/movie/popular?api_key=${Config.API_KEY}&page=1&limit=20`;
    const urlTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=${Config.API_KEY}&page=1&limit=20`;
    const urlTv = `https://api.themoviedb.org/3/tv/popular?api_key=${Config.API_KEY}&page=1&limit=20`;

    //---------------------------------------------------------------------------->

    /////////////////////////////[ F E T C H : P O P U L A R ]/////////////////////////////////
    console.log('urlPop', urlPop);
    fetch(urlPop)
      .then(res => res.json())
      .then(data => {
        console.log('HOME#Popular#componentDidMount data', data);

        this.setState({
          isLoading: false,
          dataSourcePop: data.results
        })

        .catch((error) => {
          console.error(error);
      });
      console.log('<< HOME#componentDidMount');
    });

    /////////////////////////////[ F E T C H : T O P - R A T E D ]/////////////////////////////////
      console.log('urlTop', urlTop);
      fetch(urlTop)
        .then(res => res.json())
        .then(data => {
          console.log('HOME#top_rated#componentDidMount data', data);

          this.setState({
            isLoading: false,
            dataSourceTop: data.results
          })

          .catch((error) => {
            console.error(error);
        });
        console.log('<< HOME#componentDidMount');
      });

      console.log('>> List3#componentDidMount');

    /////////////////////////////[ F E T C H : T V ]/////////////////////////////////
      console.log('urlTv', urlTv);
      fetch(urlTv)
        .then(res => res.json())
        .then(data => {
          console.log('List3#/SeriesUS#/componentDidMount data', data);

          this.setState({
            isLoading: false,
            dataSourceTv: data.results
          })

          .catch((error) => {
            console.error(error);
        });
        console.log('<< List3#componentDidMount');
      });


  }


  render() {
    const {dataSourcePop, dataSourceTop, dataSourceTv } = this.state;
    if(this.state.isLoading) {

      return (
        <View style={{flex: 1, backgroundColor: '#000'}}>

          <ActivityIndicator style={{color:'#000'}}/> 

        </View>
      );

    } else {
      return (
  
          <ScrollView>
        
            <Hero />  
        
        
          <View style={Styles.container}>
            
            <List1 dataSource={dataSourcePop}/>  
            <List2 dataSource={dataSourceTop}/> 
            <List3 dataSource={dataSourceTv}/> 

          </View>
          
        </ScrollView>
      
        
      )
    }
  }
}
export default Home;

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