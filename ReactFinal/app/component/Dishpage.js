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
    TextInput,
    Button,
    ScrollView
}from 'react-native'
import { List,ListItem } from 'react-native-elements';
import {Navigator,StackNavigator} from 'react-navigation'
import Commemt from './Commemt'

var info;
export default class Dishpage extends Component{
    static navigationOptions = ({ navigation }) => ({
        title : `${navigation.state.params.DishId.foodname}`,//DishId.name
    });
    constructor(props){
        super(props);
        this.state={
            Info : [],
            sourceURL : this.props.url,
        }
        
    }
    render(){
        const { params } = this.props.navigation.state;
        var price = params.DishId.price
        var id = params.DishId.id
        var description = params.DishId.description
        //var pic = {src:require('./../element/dish1.jpg')}
        return(
            <ScrollView style={PageStyle.containor}>
                <View style={PageStyle.imageView}>
                    <Image source={require('./../element/dish1.jpg')}
                    style={PageStyle.ImageStyle}/>
                    
                </View>

                <View style={PageStyle.seperator}/>

                <View style={PageStyle.LikeView}>
                    <Text>点赞的人数：{params.DishId.id}</Text>
                    <TouchableOpacity onPress={()=>this._likeView()}>
                        <Image source={require('./../element/like.png')} 
                            style={PageStyle.Like}
                        />
                    </TouchableOpacity>
                </View>

                <View style={PageStyle.seperator}/>

                <View style={PageStyle.Introduction}>
                    <Text>{description}</Text>
                </View>

                <View style={PageStyle.seperator} />
                
                <View style={PageStyle.Comment}>
                    <Commemt id={id}/>
                </View>

                
            </ScrollView>
        );
    }

    _likeView(){
        let opts = {
            method:"post",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // text: this.state.submittext,
                foodid: params.DishId.id,
            })
        }
        let url = "http://169.254.186.120:8000/pdianzan/"
        fetch(url,opts)
        .then((response) => {
            return response.json();  
        })
        .then((responseData) => {  
            // let temp = responseData;
            this.setState({text:responseData});
            alert(this.state.text);
        })  
        .catch((error) =>{  
            alert(error);  
        })
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
        alignItems : 'flex-end',
        alignSelf : 'flex-end',
    },
    LikeView : {
        alignItems : 'flex-end',
        width : mon_width,
        height : mon_heigth/25,
        alignSelf : 'flex-end',
        flexDirection : 'row'
    },
    CommentStyle : {
        width : mon_width,
    },
    Introduction : {

    }
})
