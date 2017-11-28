import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image
}from 'react-native'

// var containor_width = Dimensions.get('window').width;
// var containor_height = Dimensions.get('window').height;
var backg;
var containor_height;
var containor_width;
export default class DishContainor extends Component{
    constructor(props){
        super(props);
        this.setState={
            containor_height : props.height,
            // backg : props.backgroundColor,
             containor_width : props.width,
        }
         containor_width = this.props.width;
         containor_height = this.props.height;
         backg = props.backgroundColor;
        // alert(containor_width);
    }

    render(){

        containor_width = this.props.width;
        containor_height = this.props.height;
        return(
            <View style={ContainorStyle.containor}>
                <Image source={require('/Users/zhangyongde/Desktop/ReactFinal/Final_Web/ReactFinal/app/element/gps.png')}
                        style={{width : containor_width,height : containor_height}}/>
                        
            </View>
        );
    }
}
// 
const ContainorStyle  = StyleSheet.create({
    containor : {             //draw a border to show the containor
        width : containor_width/5,
        height : containor_height/10,
        flexDirection : 'column',
        alignItems : 'center',
        alignSelf : 'center',
        justifyContent : 'space-around',
        // backgroundColor : backg,
    },
    image_style : {
        width : containor_width,
        height : containor_height,
        backgroundColor : backg,
    }
});