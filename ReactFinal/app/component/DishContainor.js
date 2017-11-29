import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    ListView
}from 'react-native'
import { List } from 'react-native-elements';

// var containor_width = Dimensions.get('window').width;
// var containor_height = Dimensions.get('window').height;
var backg;
var containor_height;
var containor_width;

var test1=['1','2','3'];
var test2=['4','5','6'];

export default class DishContainor extends Component{
    constructor(props){
        super(props);
         containor_width = this.props.width;
         containor_height = this.props.height;
         backg = props.backgroundColor;
         var ds = new ListView.DataSource({
             rowHasChanged : (r1,r2) => r1 != r2,
         })
         this.state={
             //containor_height : props.height,
             //containor_width : props.width,
             dataSource : ds,
             data1 : test1,
             data2 : test2, 
        }
    }

    render(){

        containor_width = this.props.width;
        containor_height = this.props.height;
        return(
            <View style={ContainorStyle.containor}>
                 {/* <ListView dataSource={this.state.data1}
                 renderRow={(rowData,srctionId,rowId)=> this.renderRow(rowData,rowId)}
                 showsHorizontalScrollIndicator={false}
                 />
                 <ListView 
                 dataSource={his.state.data2}
                 renderRow={(rowData,srctionId,rowId)=> this.renderRow(rowData,rowId)}
                 showsHorizontalScrollIndicator={false}/> */}
            </View>
        );
    }
}
// 
const ContainorStyle  = StyleSheet.create({
    containor : {             //draw a border to show the containor
        width : containor_width/5,
        height : containor_height/10,
        flexDirection : 'row',
        alignItems : 'center',
        alignSelf : 'center',
        justifyContent : 'space-around',
        borderWidth : 1,
        // backgroundColor : backg,
    },
    image_style : {
        width : containor_width,
        height : containor_height,
        backgroundColor : backg,
    }
});