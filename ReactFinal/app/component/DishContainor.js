import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    ListView,
    FlatList,
    uri,
}from 'react-native'
import { List,ListItem } from 'react-native-elements';
import DishInformation from './DishInformation';

var backg;
var containor_height;
var containor_width;

var level;
export default class DishContainor extends Component{
    constructor(props){
        super(props);
         containor_width = Dimensions.get('window').width;
         containor_height = this.props.height;
         backg = props.backgroundColor;
         level = this.props.level;
         this.state={
             dishInformation : null,
             users : [],
         }
    }

    componentDidMount(){
        fetch('https://api.github.com/users')
        .then( response => response.json() )    
        .then( data => {
              this.setState({ users : data })
            })
        .catch( error => alert(error) )
    }

    render(){
        level = this.props.level;
        return(
            <View style={ContainorStyle.containor}>
                <View style={ContainorStyle.inOneRow}>
                    <List>
                        <FlatList
                            temSeparatorComponent = {this.sepa}
                            horizontal={false}
                            data={this.state.users}
                            renderItem={this._renderItem}
                            ItemSeparatorComponent = {this._separactor}
                            ListFooterComponent = {this._footer}
                            keyExtractor = {item => item.id}
                            style={ContainorStyle.itemStyle}
                        />
                    </List>
                </View>
            </View>
        );
    }

    _separactor(){
        return(<View style={ContainorStyle.border}/>);
    }

    _renderItem(item){
        return(
            <TouchableOpacity >
                <ListItem
                    title={`${item.login}`}
                />
                
            </TouchableOpacity>
        )
    }
}
// 
const ContainorStyle  = StyleSheet.create({
    containor : {             //draw a border to show the containor
        width : containor_width,
        height : containor_height/10,
        flexDirection : 'column',
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
    },
    inOneRow : {
        width : Dimensions.get('window').width,
    },
    border : {
        borderWidth : 1,
    },
    itemStyle : {
        height : Dimensions.get('window').height,
    }
});