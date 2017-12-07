import React, { Component } from 'react';
import {
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    Modal,
    DeviceEventEmitter
}from 'react-native'
import {StackNavigator} from 'react-navigation'
import Navigation_list from './Navigation_list' //this is to show the list to select the level
import UserLog from './UserLog' // this is for the login window


var window_width = Dimensions.get('window').width;
var window_height = Dimensions.get('window').height;
var bar_height = window_height/10;


export default class Navigation_bar extends Component{
    constructor(props){
        super(props);
        this.state={
            listVisible : false,
            userVisible : false,
            level : 1,
            flag : 0,
        }
        
    }
    select_level(){
        this.setState({
            listVisible : !this.state.listVisible,
            flag : 1.
        });
        this.forceUpdate();
        DeviceEventEmitter.emit('DishContainor',`${this.state.level}`);
    }

    showWindow(){
        this.setState({
            userVisible : !(this.state.userVisible),
            flag : 2,
        })
    }

    componentWillMount(){
        this.msglistener = DeviceEventEmitter.addListener('Navigation_bar',(level,)=>{
            this.setState({
                level : level,
            })
        });
        this.forceUpdate();
    }

    // shouldComponentUpdate(){
    //     this.msglistener = DeviceEventEmitter.addListener('Navigation_bar',(level)=>{
    //         this.setState({
    //             level : level,
    //         })
    //     })
    //     this.forceUpdate();
    // }
    render(){
        return(
            <View >
                <View style={style_bar.containor}>
                    <TouchableOpacity onPress={()=>this.select_level()}>
                        <Image source={require('./../element/gps.png')} 
                                style = {style_bar.navigate_button}/>
                    </TouchableOpacity>

                        <Navigation_list visible={this.state.listVisible} flag={this.state.flag}/>

                    <View >
                        <Text style={style_bar.title}> Lazy Menu </Text>
                    </View>

                    <TouchableOpacity onPress={()=>this.showWindow()}>
                        <Image source={require('./../element/user.png')} 
                                style={style_bar.user_button} />
                        <UserLog visible ={this.state.userVisible} change_function={this._changeUser} flag={this.state.flag}/>
                    </TouchableOpacity>
                    
                </View>

                <View  style={style_bar.showLevel}>
                        <Text style={style_bar.levelFont}>{`Level ${this.state.level}`}</Text>
                </View>
                
            </View>
            
        );
    }

    _changeUser=()=>{
        this.setState({userVisible : !this.state.userVisible})
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
    showLevel : {//this style just want to give some blank to the top for user to see the time and wifi
        height : Dimensions.get('window').height/20,
        borderWidth : 1,
        width : Dimensions.get('window').width,
        backgroundColor : 'rgba(117,117,117,1)',
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
    },
    levelFont : {
        fontSize : 20,
        color : 'white',
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf : 'center'
      },
});
