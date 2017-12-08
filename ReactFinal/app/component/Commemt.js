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

export default class Commemt extends Component{
    constructor(props){
        super(props);
        this.state={
            submittext : "",
            comment : [ {"id" : "1","comment":"hahahaah"},
                        {"id" : "2","comment": "hsiofghvaik"},
                        {"id" : "3","comment": "hsiofghvaik"},
                        {"id" : "4","comment": "hsiofghvaik"},
                        {"id" : "5","comment": "hsiofghvaik"},
                        {"id" : "6","comment": "hsiofghvaik"}],
        }
    }

    componentDidMount(){
        let opts = {
            method:"get",
        }
        let url = "http://192.168.57.1:8000/showmassage/"
        url = url + `foodid${this.props.id}`
        print(url)
        fetch(url,opts)
        .then((response) => {
            return response.json();  
        })
        .then((responseData) => {  
            this.setState({comments:responseData});
            // alert(this.state.dishes);
        })
        .catch((error) =>{  
            alert(error);
        })
    }

    render(){
        //fetch url into comment[]
        return(
            <View>
                <List>
                    <FlatList
                        temSeparatorComponent = {this.sepa}
                        horizontal={false}
                        data={this.state.comment}
                        renderItem={this._renderItem}
                        ItemSeparatorComponent = {this._separactor}
                        keyExtractor = {item => item.id}
                        // ListFooterComponent = {this._footer}
                    />
                </List>
                <View style={OneComment.InputStyle}> 
                    <TextInput style={OneComment.Input} 
                        onChangeText={(text)=>this.setState({submittext : text})}
                    />
                    <Button style={OneComment.Submmit} title={`submit`}
                        onPress={()=> this.submit()}
                    />
                </View>
            </View>
        );
    }
    submit(){
        let opts = {
            method:"post",
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: this.state.submittext,
            })
        }
        let url = "http://192.168.57.1:8000/index/"
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
    _separactor = () =>{ return <View style={OneComment.LineStyle}/>}

    _renderItem(item){
        return(
            <TouchableOpacity>
                <ListItem
                    title={item.item.id}
                    subtitle={item.item.comment}
                />
            </TouchableOpacity>
        );
    }
}

var comm_width = Dimensions.get('window').width;
var comm_height = Dimensions.get('window').height;

const OneComment = StyleSheet.create({
    OneComment : {
        width : comm_width,
        height : comm_height/10,
    },
    LineStyle : {
        borderWidth : 1,
    },
    InputStyle : {
        height : comm_height/15,
        width : comm_width,
        flexDirection : 'row'
    },
    Input : {
        width : comm_width/1.2,
    },
    Submmit : {
        height : comm_height/20,
    }
});
