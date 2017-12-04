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
  DeviceEventEmitter
} from 'react-native';
import Navigation_bar from './app/component/Navigation_bar'
import DishContainor from './app/component/DishContainor'


export default class ReactFinal extends Component {
  constructor(props){
    super(props);
    this.state={
      level : 1,
    }
  }

  componentDidMount(){
      this.message=DeviceEventEmitter.addListener('ReactFinal',(levelc)=>{
        this.setState({
          level : levelc,
        })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigation_bar /> 

        <View style={styles.dishView_style}>
          <DishContainor height={100}  width={Dimensions.get('window').width} backgroundColor='black' level={this.state.level}/>
        </View>
      </View>
    );
  }
  handelLevel(event){
      this.setState({ })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  showLevel : {//this style just want to give some blank to the top for user to see the time and wifi
     height : Dimensions.get('window').height/20,
     borderWidth : 1,
     width : Dimensions.get('window').width,
     backgroundColor : 'rgba(117,117,117,1)',
  },
  dishView_style : {
    flexDirection : 'row',
  },
  levelFont : {
    fontSize : 20,
    color : 'white',
    alignItems : 'center',
    justifyContent : 'center',
    alignSelf : 'center'
  },
});

AppRegistry.registerComponent('ReactFinal', () => ReactFinal);
