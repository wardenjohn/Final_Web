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
    }

    render(){
        return(
            <View>
                <List>
                    <FlatList
                        temSeparatorComponent = {this.sepa}
                        ref = {(FlatList) => this._flatList = FlatList}
                        horizontal={false}
                        data={this.state.users}
                        renderItem={this._renderItem}
                        ItemSeparatorComponent = {this._separactor}
                        ListFooterComponent = {this._footer}
                        keyExtractor = {item => item.id}
                    />
                </List>
            </View>
        );
    }

    _separactor = () =>{ return <View style={styles.separactor_sty}/>}

    _rendenItem = (item) => {
        return(
            <ListItem
                title={}
            />
        );
    }
}

