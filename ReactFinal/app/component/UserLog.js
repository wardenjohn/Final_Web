import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  FlatList,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
  DeviceEventEmitter
} from 'react-native';

var win_width = Dimensions.get('window').width/2;
var win_height = Dimensions.get('window').height/2;
var isShow;
var ok =1 ;
export default class UserLog extends Component{
    constructor(props){
        super(props);
        this.state ={
            isVisible : this.props.visible,
            username : "",
            password : ""
        }
        isShow = this.state.isVisible;
    }

    _changeusername(text){
        this.setState({username:text})
    }

    _changepassword(text){
        this.setState({password:text})
    }

    confirm(){
        let opts = {
            method:"post",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        }
        
        let url = "http://169.254.186.120:8000/login/"
        fetch(url,opts)
        .then((response) => {  
            return response.json();
        })  
        .then((responseData) => {  
            this.setState({text:responseData.massage});

            // responseData.username
            if(this.state.text == "login success"){
                this.props.changeName(`${responseData.username}`);//return a user in order the change the user nane in the bar 
            }
            else{

            }
            alert(this.state.text);
        })  
        .catch((error) =>{  
            alert(error);  
        }) 
    }//this funtion is for the confirm button

    cancel(){
        ok = 1;
        this.setState({
            isVisible : !(this.state.isVisible),
        });
        
    }

    registry(){
        let opts = {
            method:"post",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        }
        let url = "http://172.20.10.3:8000/regist/"
        fetch(url,opts)  
        .then((response) => {
            return response.json();  
        })
        .then((responseData) => {  
            // let temp = responseData;

            this.setState({text:responseData});

            this.props.change_function();//can jump out the window

            alert(this.state.text);
        })  
        .catch((error) =>{  
            alert(error);  
        }) 
        this.props.change_function();
    }//this function is for the registry button

    _changeState(){
        this.setState({isVisible : this.state.isVisible});
    }
    chage_visable(){
        this.props.change_function();
    }
    _logout(){

        this.props.change_function();
    }
    render(){
        isShow  = this.props.visible;
        return(
        <View style={style_User.contain_modal}>
            <Modal animationType={'slide'}
                transparent={true}
                onRequestClose={() => {this.onRequestClose()}}
                visible={isShow}
            >

                <View style={style_User.modal_background}>
                    <View style={style_User.board_window}>
                        <View style={style_User.viewOnClose}>
                            <TouchableOpacity onPress={()=>this.chage_visable()}>
                                <Text>X</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={style_User.viewUserName}>
                            <Image source={require('./../element/userslog.png')}
                               style={style_User.imageStyle}
                            />
                            <TextInput 
                                style={style_User.inputStyle}
                                onChangeText={(text) => this._changeusername(text)}
                            />
                        </View>

                        <View style={style_User.viewUserPassword}>
                            <Image source={require('./../element/password.png')}
                                style={style_User.imageStyle}
                            />
                            <TextInput style={style_User.inputStyle}
                                password={true}
                                onChangeText={(text) => this._changepassword(text)}
                            />
                        </View>

                        <View style={style_User.viewButton}>
                            <Button title={'      登录      '} onPress={()=>this.confirm()}/>
                            <Text> </Text>
                            <Button title={'      注销      '} onPress={()=>this._logout()}/>
                        </View> 

                        <Button title={'注册'} onPress={()=>this.registry()}/>    
                    </View>
                </View>

            </Modal>
        </View>
        );
    }
}

const style_User = StyleSheet.create({
    contain_modal : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_background : {
        flex : 1,
        backgroundColor : 'rgba(0,0,0,0.5)',
        justifyContent : 'center',
        alignItems : 'center'
    },
    board_window : {
        width : win_width,
        height : win_height,
        borderWidth : 2,
        backgroundColor : 'rgba(255,255,255,1)',
        flexDirection : 'column'
    },
    viewOnClose : {
        borderWidth : 1,
        justifyContent : 'flex-end',
    },
    viewUserName : {
        width : win_width,
        flexDirection : 'row',
    },
    viewUserPassword :{
        borderWidth : 1,
        width : win_width,
        flexDirection : 'row'
    },
    viewButton : {
        borderWidth : 1,
        width : win_width,
        flexDirection : 'row',
       
    },
    button : {
        borderRadius:2,
    },
    imageStyle : {
        height : win_height/4,
        width : win_width/3,
        alignSelf : 'auto',
    },
    inputStyle : {
        width : win_width - win_width/3,
    }
});