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
    DeviceEventEmitter
}from 'react-native'
import Dishpage from './Dishpage'
import { List,ListItem } from 'react-native-elements';
import {Navigator,StackNavigator} from 'react-navigation'
import Navigation_bar from './Navigation_bar'
//import DishInformation from './DishInformation';

var backg;
var containor_height;
var containor_width;

var level;
var navigater;
/**it is very funny that this.props.navigation is a blank object
 * in order to use  the navigation function, I fource to make a var
 * to take the navigate wihch is not blank and we can use this var as a function
 * to sove this problem
 */
export default class DishContainor extends React.Component{
    static navigationOptions = {
        title : 'Dish Information',
        headerTitleStyle : {alignSelf : 'center'}
    }
    constructor(props){
        super(props);
        containor_width = Dimensions.get('window').width;
        containor_height = this.props.height;
        backg = props.backgroundColor;
        level = this.props.level;
        this.state={
            dishInformation : null,
            dishes : [{
                "login": "mojombo",
                "id": 1,
                "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/dishes/mojombo",
                "html_url": "https://github.com/mojombo",
                "followers_url": "https://api.github.com/dishes/mojombo/followers",
                "following_url": "https://api.github.com/dishes/mojombo/following{/other_user}",
                "gists_url": "https://api.github.com/dishes/mojombo/gists{/gist_id}",
                "starred_url": "https://api.github.com/dishes/mojombo/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/dishes/mojombo/subscriptions",
                "organizations_url": "https://api.github.com/dishes/mojombo/orgs",
                "repos_url": "https://api.github.com/dishes/mojombo/repos",
                "events_url": "https://api.github.com/dishes/mojombo/events{/privacy}",
                "received_events_url": "https://api.github.com/dishes/mojombo/received_events",
                "type": "User",
                "site_admin": false
            },
            {
                "login": "defunkt",
                "id": 2,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/dishes/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/dishes/defunkt/followers",
                "following_url": "https://api.github.com/dishes/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/dishes/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/dishes/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/dishes/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/dishes/defunkt/orgs",
                "repos_url": "https://api.github.com/dishes/defunkt/repos",
                "events_url": "https://api.github.com/dishes/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/dishes/defunkt/received_events",
                "type": "User",
                "site_admin": true
            },{
                "login": "defunkt",
                "id": 3,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/dishes/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/dishes/defunkt/followers",
                "following_url": "https://api.github.com/dishes/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/dishes/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/dishes/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/dishes/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/dishes/defunkt/orgs",
                "repos_url": "https://api.github.com/dishes/defunkt/repos",
                "events_url": "https://api.github.com/dishes/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/dishes/defunkt/received_events",
                "type": "User",
                "site_admin": true
            },{
                "login": "defunkt",
                "id": 4,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/dishes/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/dishes/defunkt/followers",
                "following_url": "https://api.github.com/dishes/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/dishes/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/dishes/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/dishes/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/dishes/defunkt/orgs",
                "repos_url": "https://api.github.com/dishes/defunkt/repos",
                "events_url": "https://api.github.com/dishes/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/dishes/defunkt/received_events",
                "type": "User",
                "site_admin": true
            },{
                "login": "defunkt",
                "id": 5,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/dishes/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/dishes/defunkt/followers",
                "following_url": "https://api.github.com/dishes/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/dishes/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/dishes/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/dishes/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/dishes/defunkt/orgs",
                "repos_url": "https://api.github.com/dishes/defunkt/repos",
                "events_url": "https://api.github.com/dishes/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/dishes/defunkt/received_events",
                "type": "User",
                "site_admin": true
            },{
                "login": "defunkt",
                "id": 6,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/dishes/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/dishes/defunkt/followers",
                "following_url": "https://api.github.com/dishes/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/dishes/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/dishes/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/dishes/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/dishes/defunkt/orgs",
                "repos_url": "https://api.github.com/dishes/defunkt/repos",
                "events_url": "https://api.github.com/dishes/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/dishes/defunkt/received_events",
                "type": "User",
                "site_admin": true
            },{
                "login": "defunkt",
                "id": 7,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/dishes/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/dishes/defunkt/followers",
                "following_url": "https://api.github.com/dishes/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/dishes/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/dishes/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/dishes/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/dishes/defunkt/orgs",
                "repos_url": "https://api.github.com/dishes/defunkt/repos",
                "events_url": "https://api.github.com/dishes/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/dishes/defunkt/received_events",
                "type": "User",
                "site_admin": true
            },{
                "login": "defunkt",
                "id": 8,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/dishes/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/dishes/defunkt/followers",
                "following_url": "https://api.github.com/dishes/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/dishes/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/dishes/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/dishes/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/dishes/defunkt/orgs",
                "repos_url": "https://api.github.com/dishes/defunkt/repos",
                "events_url": "https://api.github.com/dishes/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/dishes/defunkt/received_events",
                "type": "User",
                "site_admin": true
            },{
                "login": "defunkt",
                "id": 9,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/dishes/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/dishes/defunkt/followers",
                "following_url": "https://api.github.com/dishes/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/dishes/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/dishes/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/dishes/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/dishes/defunkt/orgs",
                "repos_url": "https://api.github.com/dishes/defunkt/repos",
                "events_url": "https://api.github.com/dishes/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/dishes/defunkt/received_events",
                "type": "User",
                "site_admin": true
            },],
        }
    }

    componentDidMount(){
        let opts = {
            method:"get",
        }
        let url = "http://192.168.57.1:8000/showdish/"
        fetch(url,opts)
        .then((response) => {
            return response.json();  
        })
        .then((responseData) => {  
            this.setState({dishes:responseData});
            alert(this.state.dishes);
        })  
        .catch((error) =>{  
            alert(error);  
        })
    }

    componentWillMount(){
        this.message=DeviceEventEmitter.addListener('DishContainor',(levelc)=>{
            this.setState({
              level : levelc,
            })
          })    
    }
    //dishes 只是用于测试的，你应该调用一下this.state.level里面从选择列表传过来的楼层进行选择渲染的元素
    render(){
        const { navigate } = this.props.navigation;
        //alert(this.state.level);
        navigater = navigate;
        level = this.props.level;
        return(
            <View style={styles.container}>
            <Navigation_bar />
            <View style={ContainorStyle.containor}>
                <View style={ContainorStyle.inOneRow}>
                    <List>
                        <FlatList
                            temSeparatorComponent = {this.sepa}
                            ListHeaderComponent={null}
                            horizontal={false}
                            data={this.state.dishes}
                            renderItem={this._renderItem}
                            ItemSeparatorComponent = {this._separactor}
                            keyExtractor = {item => item.id}
                            onEndReachedThreshold={0.5}
                        />
                    </List>
                </View>
            </View>
            </View>
        );
    }

    _separactor(){
        return(<View style={ContainorStyle.border}/>);
    }

    _renderItem(item){
        return(
            <TouchableOpacity 
                onPress={()=>navigater('Profile',{DishId : item.item})}
                style={ContainorStyle.itemStyle}>

               <ListItem
                    title={item.item.foodname}
                    subtitle = {item.item.price}
                    roundAvatar
                    avatar={ {uri : item.item.avatar_url} }
               />
            </TouchableOpacity>
        )
    }//in this Item we need to give a onPress function which can jump to another page

}

const ContainorStyle  = StyleSheet.create({
    containor : {             
        width : containor_width,
        height : containor_height/10,
        flexDirection : 'column',
        alignItems : 'center',
        alignSelf : 'center',
        justifyContent : 'space-around',
        borderWidth : 1,
    },
    image_style : {
        width : containor_width,
        height : containor_height,
        backgroundColor : backg,
    },
    inOneRow : {
        width : Dimensions.get('window').width,
    },
    border : {
        borderWidth : 1,
    },
    itemStyle : {
        height : Dimensions.get('window').height/10,
    }
});

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#F5FCFF',
    },
    showLevel : {//this style just want to give some blank to the top for user to see the time and wifi
       height : Dimensions.get('window').height/20,
       borderWidth : 1,
       width : Dimensions.get('window').width,
       backgroundColor : 'rgba(117,117,117,1)',
    },
    dishView_style : {
      flexDirection : 'row',
    },
    levelFont : {
      fontSize : 20,
      color : 'white',
      alignItems : 'center',
      justifyContent : 'center',
      alignSelf : 'center'
    },
  });