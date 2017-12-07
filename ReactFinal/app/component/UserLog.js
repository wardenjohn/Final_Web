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
  TextInput
} from 'react-native';

var win_width = Dimensions.get('window').width/2;
var win_height = Dimensions.get('window').height/2;
var isShow;
var ok = 1;
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
        let url = "http://192.168.57.1:8000/login/"
        fetch(url,opts)
        .then((response) => {  
            return response.json();
        })  
        .then((responseData) => {  
            this.setState({text:responseData.massage});

            // responseData.username

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
        })
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
        let url = "http://192.168.57.1:8000/regist/"
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
    }//this function is for the registry button

    render(){
        if(this.props.flag == 2 && ok == 1)
        {
            isShow = !isShow;
            ok = 2;
        }

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
                            <Image source={require('/home/gyt/Git/Final_Web/ReactFinal/app/element/userslog.png')}
                               style={style_User.imageStyle}
                            />
                            <TextInput 
                                style={style_User.inputStyle}
                                onChangeText={(text) => this._changeusername(text)}
                            />
                        </View>

                        <View style={style_User.viewUserPassword}>
                            <Image source={require('/home/gyt/Git/Final_Web/ReactFinal/app/element/password.png')}
                                style={style_User.imageStyle}
                            />
                            <TextInput style={style_User.inputStyle}
                                password={true}
                                onChangeText={(text) => this._changepassword(text)}
                            />
                        </View>

                        <View style={style_User.viewButton}>
                            <Button title={'      确定      '} onPress={()=>this.confirm()}/>
                            <Text> </Text>
                            <Button title={'      取消      '} onPress={()=>this.cancel()}/>
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