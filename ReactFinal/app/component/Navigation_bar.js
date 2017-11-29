import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    Modal
}from 'react-native'
import {StackNavigator} from 'react-navigation'
import Navigation_list from './Navigation_list' //this is to show the list to select the level
import UserLog from './UserLog' // this is for the login window


var window_width = Dimensions.get('window').width;
var window_height = Dimensions.get('window').height;
var bar_height = window_height/10;

//the method I want to realize is that select_level function can return a list as a component
//after we cilck one of the element of the list ,it will change into another page
//the same as the User button
// var listVisible = false;
export default class Navigation_bar extends Component{
    constructor(props){
        super(props);
        this.state={
            listVisible : true,
            userVisible : false,
        }
    }
    select_level(){
        //alert(this.state.listVisible);
        this.setState({listVisible : !this.state.listVisible});
        // setTimeout(()=>{alert("!!")},2000);
        this.forceUpdate();
    }

    showWindow(){
        this.setState({
            userVisible : !(this.state.userVisible),
        })
    }

    render(){
        return(
            <View style={style_bar.containor}>
                <TouchableOpacity onPress={()=>this.select_level()}>
                    <Image source={require('./../element/gps.png')} 
                            style = {style_bar.navigate_button}/>
                    <Navigation_list visible={this.state.listVisible}/>
                </TouchableOpacity>
                
                <View >
                    <Text style={style_bar.title}> Lazy Menu </Text>
                </View>

                <TouchableOpacity onPress={()=>this.showWindow()}>
                    <Image source={require('./../element/user.png')} 
                            style={style_bar.user_button} />
                    <UserLog visible ={this.state.userVisible} />
                </TouchableOpacity>
            </View>
        );
    }
}

const style_bar = StyleSheet.create({
    containor : {
        backgroundColor: 'rgba(43,175,238,1)',
        width : window_width,
        height : bar_height,
        flexDirection : 'row',
        alignItems : 'center',
        alignSelf : 'center',
        //justifyContent : 'center'
    },
    navigate_button : {
        width : window_width/5,
        height : bar_height,
    },
    user_button : {
        width : window_width/5,
        height : bar_height,
    },
    title : {
        fontSize : 40,
        color : 'white',
        alignItems : 'center',
        alignSelf:'center',
        textAlign : 'center',
        justifyContent : 'center'
    },
    title_view : {
        justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'center',
    },
    test :{
        backgroundColor : 'black',
        height : 100,
        width : 100
    }
});
