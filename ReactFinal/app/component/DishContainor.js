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

    // componentDidMount(){
    //     fetch('https://api.github.com/users')
    //     .then( response => response.json() )    
    //     .then( data => {
    //           this.setState({ users : data })
    //         })
    //     .catch( error => alert(error) )
    // }

    render(){
        const { navigate } = this.props.navigation;
        //alert(navigate)
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
                            horizontal={false}
                            data={this.state.users}
                            renderItem={this._renderItem}
                            ItemSeparatorComponent = {this._separactor}
                            keyExtractor = {item => item.id}
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
                onPress={()=>navigater('Profile',{DishId : item.index})}
                style={ContainorStyle.itemStyle}>
                
               <ListItem
                title={item.item.login}
                subtitle = {item.url}
                roundAvatar
                avatar={ {uri : item.avatar_url} }
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