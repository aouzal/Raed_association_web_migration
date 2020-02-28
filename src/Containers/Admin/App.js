import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
 import  { MessageList,MessageCreate }  from './Messages';
import  { UserList, UserEdit, UserCreate }  from './Users';
// import  { TeamList, TeamEdit, TeamCreate }  from './Team';
import  { GoalList, GoalEdit, GoalCreate }  from './Goals';
import products from './Post';
 import team from './Team';
 import partners from "./Partners"
// import  { PartnerList, PartnerEdit, PartnerCreate }  from './Partners';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/People';
import ReviewIcon from '@material-ui/icons/Comment';
import GoalIcon from '@material-ui/icons/ControlCamera';
import PartnerIcon from '@material-ui/icons/Share';
import Dashboard from './Dashboard';
import { RestProvider, AuthProvider, base64Uploader } from './lib';


  const firebaseConfig = {
    apiKey: "AIzaSyBJpQiojHu6n3anExec95FPjhBAKzeIDLo",
    authDomain: "raed-association.firebaseapp.com",
    databaseURL: "https://raed-association.firebaseio.com",
    projectId: "raed-association",
    storageBucket: "raed-association.appspot.com",
    messagingSenderId: "6412941637",
    appId: "1:6412941637:web:a830d288d1eb9108cde62c"
};



const trackedResources = [{ name: 'posts', isPublic: true }, { name: 'users', isPublic: true },{ name: 'team', isPublic: true },{ name: 'goals', isPublic: true },{ name: 'partners', isPublic: true },{name:'messages',isPublic:true}];

const authConfig = {
  userProfilePath: '/users/',
  userAdminProp: 'isAdmin'
};


const dataProvider = RestProvider(firebaseConfig, { trackedResources,authConfig });

class App extends Component {
  render() {
    return (
      <Admin dashboard={Dashboard} title="Admin" dataProvider={dataProvider} authProvider={AuthProvider(authConfig)}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
        <Resource name="posts" {...products} icon={PostIcon}/>
        <Resource name="team" {...team} />
        <Resource name="goals" list={GoalList} edit={GoalEdit} create={GoalCreate} icon={GoalIcon}/>
        <Resource name="messages" list={MessageList} icon={ReviewIcon}/>
        <Resource name="partners" {...partners} icon={PartnerIcon}/>

       

      </Admin>
    );
  }
}
export default App ;