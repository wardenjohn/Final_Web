/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Navigation_bar from './app/component/Navigation_bar'
//import Navigator from 'react-navigation'
import DishContainor from './app/component/DishContainor'


export default class ReactFinal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigation_bar /> 

        <View style={styles.dishView_style}>
          <DishContainor height={100}  width={50} backgroundColor='black'/>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  for_time : {//this style just want to give some blank to the top for user to see the time and wifi
     height : Dimensions.get('window').height/50,
  },
  dishView_style : {
    flexDirection : 'row',
  }
});

AppRegistry.registerComponent('ReactFinal', () => ReactFinal);
