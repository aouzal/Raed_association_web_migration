import * as TYPE from '../Type/types.js'
import firebase from '../firebase-config'



const databaseRef1 = firebase.database().ref();
const databaseRef2 = firebase.database().ref();
// this is to get the Goals table from firebase
const GoalsRef = databaseRef1.child("goals");
const TeamRef = databaseRef2.child("team");
console.log (GoalsRef)



export const getTeam=()=>async dispatch=>{
    TeamRef.once("value", snapshot => {
        dispatch({
        type:TYPE.LOAD_TEAM,
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

