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
  Button
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
export default class SelectList extends Component{
    constructor(props){
        super(props);
        this.state={
            isVisible : this.props.visible
        }
    }
    render(){
        return(
        <View style={style_list.view_modal}>
            <Modal animationType={'fade'}
                   transparent={true}
                   onRequestClose={() => {this.onRequestClose()}}
                   visible={this.state.isVisible}
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
                />
            </TouchableOpacity>
          )
      }

    change_stateVisible(){
        this.setState({
            isVisible : !(this.state.isVisible),
        })
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
    }
})