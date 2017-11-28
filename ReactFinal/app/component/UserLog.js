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

export default class UserLog extends Component{
    constructor(props){
        super(props);
        this.state ={
            isVisible : this.props.visible,
        }
    }

    chage_visable(){
        this.setState({
            isVisible : !this.state.isVisible,
        })
    }

    confirm(){

    }//this funtion is for the confirm button

    cancel(){
        this.setState({
            isVisible : !(this.state.isVisible),
        })
    }

    registry(){

    }//this function is for the registry button

    render(){
        return(
        <View style={style_User.contain_modal}>
            <Modal animationType={'slide'}
             transparent={true}
             onRequestClose={() => {this.onRequestClose()}}
             visible={this.state.isVisible}>

                <View style={style_User.modal_background}>
                    <View style={style_User.board_window}>
                        <View style={style_User.viewOnClose}>
                            <TouchableOpacity onPress={()=>this.chage_visable()}>
                                <Text>X</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={style_User.viewUserName}>
                            <Image source={require('/Users/zhangyongde/Desktop/ReactFinal/Final_Web/ReactFinal/app/element/userslog.png')}
                               style={style_User.imageStyle}
                            />
                            <TextInput style={style_User.inputStyle}/>
                        </View>

                        <View style={style_User.viewUserPassword}>
                            <Image source={require('/Users/zhangyongde/Desktop/ReactFinal/Final_Web/ReactFinal/app/element/password.png')}
                                style={style_User.imageStyle}
                            />
                            <TextInput style={style_User.inputStyle}/>
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