
import React from 'react';
import Config from '../../../Config';
import { StyleSheet, View, Text, FlatList, Image, ActivityIndicator } from 'react-native';



class SeriesList3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],

        }

    }

    componentDidMount() {
      console.log('>> List3#componentDidMount');
      const url = `https://api.themoviedb.org/3/tv/popular?api_key=${Config.API_KEY}&page=1&limit=20`;
      console.log('url', url);
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log('List3#/SeriesUS#/componentDidMount data', data);

          this.setState({
            isLoading: false,
            dataSource: data.results
          })

          .catch((error) => {
            console.error(error);
        });
        console.log('<< List3#componentDidMount');
      });

    }

    // componentDidMount() {
    //     ApiPopular.getPopularMovies()
    //     .then(movies => {
    //         this.setState({
    //             movies
    //         });
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // };


    renderItem({ item }) {

      return (
        <View>
         <Image style={{width:120, height: 180}} source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} />
        </View>
      )
    }



  render() {

    if(this.state.isLoading) {

      return (
        <View style={Styles.container}>

          <ActivityIndicator/>

        </View>
      );

    } else {

      return (

        <View style={Styles.container}>

          <Text style={Styles.texte}>Séries US</Text>

          <View style={Styles.row}>

            <FlatList
              ItemSeparatorComponent={() => <View style={{width:10}}/>}
              horizontal
              data={this.state.dataSource}
              renderItem={this.renderItem}/>
              
          </View>

        </View>
      )
    }
  }
}

export default SeriesList3;

const Styles = StyleSheet.create({
  container: {
    flex: 1 ,
    paddingTop: 40,
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