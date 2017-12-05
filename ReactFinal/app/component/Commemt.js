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
    NavigatorIOS,
}from 'react-native'
import { List,ListItem } from 'react-native-elements';
import {Navigator,StackNavigator} from 'react-navigation'

export default class Commemt extends Component{
    constructor(props){
        super(props);
        this.state={
            comment : [ {"id":"1","comment":"hahahaah"},
                        {"id" : "2","comment": "hsiofghvaik"},
                        {"id" : "3","comment": "hsiofghvaik"},
                        {"id" : "4","comment": "hsiofghvaik"},
                        {"id" : "5","comment": "hsiofghvaik"},
                        {"id" : "6","comment": "hsiofghvaik"}]
        }
    }

    render(){
        return(
            <View>
                <List>
                    <FlatList
                        temSeparatorComponent = {this.sepa}
                        horizontal={false}
                        data={this.state.comment}
                        renderItem={this._renderItem}
                        ItemSeparatorComponent = {this._separactor}
                        ListFooterComponent = {this._footer}
                        keyExtractor = {item => item.id}
                    />
                </List>
            </View>
        );
    }

    _separactor = () =>{ return <View style={OneComment.LineStyle}/>}

    _rendenItem(item){
        return(
            <ListItem
                title={item.id}
                subtitle={item.comment}
            />
        );
    }
}

var comm_width = Dimensions.get('window').width;
var comm_height = Dimensions.get('window').height;

const OneComment = StyleSheet.create({
    OneComment : {
        width : comm_width,
        height : comm_height/10,
    },
    LineStyle : {
        borderWidth : 1,
    }
});
