import * as TYPE from '../Type/types.js'
import firebase from '../firebase-config'




const databaseRef1 = firebase.database().ref();

// this is to get the Goals table from firebase
const GoalsRef = databaseRef1.child("goals");
const TeamRef = databaseRef1.child("team");
const PartnerRef = databaseRef1.child("partners");
const PostsRef = databaseRef1.child("posts");
const MessageRef = databaseRef1.child("messages");




export const getTeam=()=>async dispatch=>{
    TeamRef.once("value", snapshot => {
        dispatch({
        type:TYPE.LOAD_TEAM,
        payload: snapshot.val() || {}
        })
    }); 
}

export const getPartners=()=>async dispatch=>{
    PartnerRef.once("value", snapshot => {
        dispatch({
        type:TYPE.LOAD_PARTNERS,
        payload: snapshot.val() || {}
        })
    }); 
}

export const getAllGoals=()=> async dispatch=>{
    GoalsRef.once("value", snapshot => {
        dispatch({
        type:TYPE.LOAD_GOALS,
        payload: snapshot.val() || {}
        })
    });
};


export const getPosts=()=>async dispatch=>{
    PostsRef.once("value", snapshot => {
        dispatch({
        type:TYPE.LOAD_POSTS,
        payload: snapshot.val() || {}
        })
    });
}

export const getPostsByid=(id)=>async dispatch=>{
    PostsRef.child(id)
        .once("value", snapshot => {
        dispatch({
        type:TYPE.LOAD_POST,
        payload: snapshot.val() || {}
        })
    });
}



export const sendMessage=(message)=>async dispatch=>{
   
    alert(JSON.stringify(message));
   
     MessageRef.set(message);

     console.log("Message Sent !");
}

