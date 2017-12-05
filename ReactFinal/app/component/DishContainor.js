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
}from 'react-native'
import Dishpage from './Dishpage'
import { List,ListItem } from 'react-native-elements';
import {Navigator,StackNavigator} from 'react-navigation'
//import DishInformation from './DishInformation';

var backg;
var containor_height;
var containor_width;

var level;
export default class DishContainor extends Component{
    static navigationOption = {
        title : 'Dish Information',
    }
    constructor(props){
        super(props);
         containor_width = Dimensions.get('window').width;
         containor_height = this.props.height;
         backg = props.backgroundColor;
         level = this.props.level;
         this.state={
             dishInformation : null,
             users : [{
                "login": "mojombo",
                "id": 1,
                "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/mojombo",
                "html_url": "https://github.com/mojombo",
                "followers_url": "https://api.github.com/users/mojombo/followers",
                "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
                "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
                "organizations_url": "https://api.github.com/users/mojombo/orgs",
                "repos_url": "https://api.github.com/users/mojombo/repos",
                "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
                "received_events_url": "https://api.github.com/users/mojombo/received_events",
                "type": "User",
                "site_admin": false
              },
              {
                "login": "defunkt",
                "id": 2,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/users/defunkt/followers",
                "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/users/defunkt/orgs",
                "repos_url": "https://api.github.com/users/defunkt/repos",
                "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/users/defunkt/received_events",
                "type": "User",
                "site_admin": true
              },{
                "login": "defunkt",
                "id": 3,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/users/defunkt/followers",
                "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/users/defunkt/orgs",
                "repos_url": "https://api.github.com/users/defunkt/repos",
                "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/users/defunkt/received_events",
                "type": "User",
                "site_admin": true
              },{
                "login": "defunkt",
                "id": 4,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/users/defunkt/followers",
                "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/users/defunkt/orgs",
                "repos_url": "https://api.github.com/users/defunkt/repos",
                "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/users/defunkt/received_events",
                "type": "User",
                "site_admin": true
              },{
                "login": "defunkt",
                "id": 5,
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/defunkt",
                "html_url": "https://github.com/defunkt",
                "followers_url": "https://api.github.com/users/defunkt/followers",
                "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
                "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
                "organizations_url": "https://api.github.com/users/defunkt/orgs",
                "repos_url": "https://api.github.com/users/defunkt/repos",
                "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
                "received_events_url": "https://api.github.com/users/defunkt/received_events",
                "type": "User",
                "site_admin": true
              },],
         }
    }

    componentDidMount(){
        fetch('https://api.github.com/users')
        .then( response => response.json() )    
        .then( data => {
              this.setState({ users : data })
            })
        .catch( error => alert(error) )
    }

    render(){
        const { navigate } = this.props.navigation;
        level = this.props.level;
        alert("hi");
        return(
            <View style={ContainorStyle.containor}>
                <View style={ContainorStyle.inOneRow}>
                    <List>
                        <FlatList
                            temSeparatorComponent = {this.sepa}
                            horizontal={false}
                            data={this.state.users}
                            renderItem={this._renderItem}
                            ItemSeparatorComponent = {this._separactor}
                            //ListFooterComponent = {this._footer}
                            keyExtractor = {item => item.id}
                        />
                    </List>
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
            onPress={()=>this.props.navigation.navigate('Profile',{DishId : item.index})}
            style={ContainorStyle.itemStyle}
            >
               <ListItem
                title={item.item.login}
                subtitle = {item.url}
                roundAvatar
                avatar={ {uri : item.avatar_url} }
               />
            </TouchableOpacity>
        )
    }

}

const ContainorStyle  = StyleSheet.create({
    containor : {             //draw a border to show the containor
        width : containor_width,
        height : containor_height/10,
        flexDirection : 'column',
        alignItems : 'center',
        alignSelf : 'center',
        justifyContent : 'space-around',
        borderWidth : 1,
        // backgroundColor : backg,
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
        height : Dimensions.get('window').height/5,
    }
});