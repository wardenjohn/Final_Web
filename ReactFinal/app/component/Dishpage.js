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

export default class Dishpage extends Component{
    static navigationOptions = {
        title : 'Dish Information',
    }
    constructor(props){
        super(props);
        this.state={
            Info : [],
            sourceURL : this.props.url,
        }
    }

    componentDidMount(){
        fetch(`${this.state.sourceURL}`)
        .then( response => response.json() )
        .then( data=> {
            this.setState({ Info : data })
        })
        .catch( error => alert(error) )
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={PageStyle.containor}>
                <View style={PageStyle.imageView}>
                    <Image />
                </View>

                <View style={PageStyle.LikeView}>
                    <Image source={require('./../element/like.png')}/>
                    <Text></Text>
                </View>

                <View style={PageStyle.Comment}>

                </View>
            </View>
        );
    }
}

const PageStyle = StyleSheet.create({
    containor : {
        flex : 1,
        
    },
    imageView : {

    },
    ImageStyle : {

    },
    LikeView : {
        alignItems : 'flex-end',
    },
    Comment : {

    }
})
