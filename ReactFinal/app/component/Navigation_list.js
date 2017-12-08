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
  DeviceEventEmitter
} from 'react-native';
import {List,ListItem} from 'react-native-elements'

var level=[
    {
        key : '1',
        name:"First Canteen",
    },
    {
        key : '2',
        name:"Second Canteen",
    },
    {
        key : '3',
        name:"Third Canteen",
    },
    {
        key : '4',
        name:"Forth Canteen",
    }
]

var isvisible;
export default class SelectList extends Component{
    constructor(props){
        super(props);
        this.state={
            isVisible : this.props.visible,
            selectedLevel : 1,
        }
        //alert(this.state.isVisible);
        isvisible = this.state.isVisible;
    }
    shouldComponentUpdate(){
        return true;
    }
    render(){
        if(this.props.flag == 1)
            isvisible = !isvisible;
        return(
            <View style={style_list.view_modal}>
                <Modal animationType={'slide'}
                       transparent={true}
                       onRequestClose={() => {this.onRequestClose()}}
                       visible={isvisible}
                >
                    <View style={style_list.backgroundStyle}>
                        <List>
                            <FlatList
                                data={level}
                                renderItem={this._renderItem}
                                ItemSeparatorComponent = {this.sepa}
                            />
                        </List>
                        <Button title='隐藏选择菜单栏' onPress={()=>this.change_stateVisible()}/>
                    </View>
                </Modal>
                
            </View>
        );
    }

    sepa(){
        return(<View style={style_list.border}/>)
    }

    _renderItem = (item) =>{
        return(
            <TouchableOpacity>
                <ListItem
                    title={item.item.name}
                    hideChevron = {true}
                    onPress = {()=>this.change_stateVisible(item.index)}
                />
            </TouchableOpacity>
        )
    }

    change_stateVisible(index){
        //alert(index+1);
        this.setState({
            isVisible : !(this.state.isVisible),
            selectedLevel : index,
        });
        if(index>=0)
            DeviceEventEmitter.emit('Navigation_bar',`${index+1}`);
        else{

        }
        //DeviceEventEmitter.emit('Navigation_bar',`${this.state.isVisible}`);
        //alert(index);
    }
}

const style_list = StyleSheet.create({
    view_modal : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    border:{
        borderWidth : 1,
        backgroundColor: 'blue',
    },
    backgroundStyle : {
        flex : 1,
        backgroundColor : 'rgba(0,0,0,0.5)',
        justifyContent : 'flex-end'
    },
    
})

/*
the truth is that we when the father can render but the inside of the children 
the constructor can just run one time ,so ,the even we give a different pramater
the values will not change just because the button can not be changed outsize the 
constoctor
*/