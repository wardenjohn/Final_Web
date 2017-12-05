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
    Modal,
}from 'react-native'
import { List,ListItem } from 'react-native-elements';

var isvisible;
export default class DishInformation extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow : this.props.isShow,
        }
        isvisible = this.props.isShow;
    }

    render(){/**this is a new page ,this page is to show the information of the dish we choosen */
        //isvisible = !isvisible;
        return(
            <Modal visible={this.state.isShow}
            >
                <View style={styleInfo.closeBar}>
                    <TouchableOpacity onPress={()=>this.closeWindow()}>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
                <View >
                </View>
            </Modal>
        );
    }

    closeWindow(){
        isvisible = !isvisible;
        this.setState({
            isShow : !this.state.isShow,
        })
    }
}

const styleInfo = StyleSheet.create({
    closeBar : {
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height/20,
        
    }
});