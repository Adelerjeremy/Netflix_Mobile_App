import React from 'react';
import { StyleSheet, View, Text, FlatList, Image, ActivityIndicator, Button } from 'react-native';


 class Details extends React.Component {
  render() {
    const {
      id,
      vote_average,
      vote_count,
      title,
    } = this.props;
    return (
      <View>
        <Text>{id}</Text>
        <Text>{title}</Text>
      
      </View>
    )
  }
}
export default Details  