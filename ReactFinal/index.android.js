/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * <DishContainor height={100}  width={Dimensions.get('window').width} backgroundColor='black' level={this.state.level}/>
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  DeviceEventEmitter,
  Modal,
  TouchableOpacity,
  Image
} from 'react-native';
import Navigation_bar from './app/component/Navigation_bar'
import DishContainor from './app/component/DishContainor'
import Dishpage from './app/component/Dishpage'
import Page from './app/component/Page'
import Navigator from 'react-navigation'
import StackNavigator from 'react-navigation'



export default class ReactFinal extends Component {
  constructor(props){
    super(props);
    this.state={
      level : 1,
      ShowBack : true,
    }
  }
  
  _ShowPage(){
    this.setState({ShowBack : !this.state.ShowBack});
  }

  componentDidMount(){
      this.message=DeviceEventEmitter.addListener('ReactFinal',(levelc)=>{
        this.setState({
          level : levelc,
        })
      })
      
  }

  render() {
    if(this.state.ShowBack == true){
      return(
        <View style={styles.container}>
          <Modal visible={this.state.ShowBack}
          animationType={'slide'}
          transparent={true}
          onRequestClose={() => {this.onRequestClose()}}
          >
            <TouchableOpacity style={styles.container}
              onPress={()=>this._ShowPage()}>
              <Image style={styles.back} source={require('./app/element/back2.png')} />
              <Text style={styles.Font}>Click into App</Text>
            </TouchableOpacity>
          </Modal>
        </View>
      );
    }
    else{
        return (
            <Page level={this.state.level}/>
      );
    }
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
  Font : {
    fontSize : 20,
    color : 'black',
    alignItems : 'center',
    justifyContent : 'center',
    alignSelf : 'center'
  },
});

AppRegistry.registerComponent('ReactFinal', () => ReactFinal);
