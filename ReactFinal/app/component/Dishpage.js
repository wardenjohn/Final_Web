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
import Commemt from './Commemt'

export default class Dishpage extends Component{
    static navigationOptions = ({ navigation }) => ({
        title : `${navigation.state.params.DishId}`,
    });
    constructor(props){
        super(props);
        this.state={
            Info : [],
            sourceURL : this.props.url,
        }
    }

    // componentDidMount(){
    //     fetch(`${this.state.sourceURL}`)
    //     .then( response => response.json() )
    //     .then( data=> {
    //         this.setState({ Info : data })
    //     })
    //     .catch( error => alert(error) )
    // }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={PageStyle.containor}>
                <View style={PageStyle.imageView}>
                    <Image source={require('./../element/dish.jpg')}
                    style={PageStyle.ImageStyle}/>
                </View>

                <View style={PageStyle.seperator}/>

                <View style={PageStyle.LikeView}>
                    <Text>50</Text>
                        <TouchableOpacity>
                            <Image source={require('./../element/like.png')} 
                            style={PageStyle.Like}
                            />
                        </TouchableOpacity>
                </View>

                <View style={PageStyle.Comment}>
                    
                </View>

                <View style={PageStyle.InputStyle}>
                </View>
            </View>
        );
    }
}

var mon_width = Dimensions.get('window').width;
var mon_heigth = Dimensions.get('window').height;

const PageStyle = StyleSheet.create({
    containor : {
        flex : 1,
    },
    imageView : {
        height : mon_heigth/3,
        width : mon_width,
        alignItems : 'center',
        justifyContent: 'center'
    },
    seperator : {
        borderWidth : 1,
        width : mon_width,
        height : 1,
    },
    Like : {
        width : mon_width / 28,
        height : mon_heigth / 28,
        alignSelf : 'auto',
    },
    LikeView : {
        flexDirection : 'row'
    },
    ImageStyle : {
        width : mon_width/1.5,
        height : mon_heigth/3.5,
    },
    LikeStyle : {
        width : mon_width,
        height : mon_heigth/5,
    },
    LikeView : {
        alignItems : 'flex-end',
        width : mon_width,
        height : mon_heigth/5,
    },
    CommentStyle : {

    },
    InputStyle : {

    }
})
