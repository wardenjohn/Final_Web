import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    ListView,
}from 'react-native'
//import Dishpage from './Dishpage'
import { List,ListItem } from 'react-native-elements';
import {Navigator,StackNavigator} from 'react-navigation'
import DishContainor from './DishContainor'
import Dishpage from './Dishpage'

const Page = StackNavigator({
    Home : { screen : DishContainor },
    Profile : { screen : Dishpage }
},{ initialRouteName: 'Home' });
//this is a navigation route config
export default Page;