
  import * as firebase from "firebase";

// replace this variable, with your own config variable
// from your firebase project
var config = {
    apiKey: "AIzaSyBJpQiojHu6n3anExec95FPjhBAKzeIDLo",
    authDomain: "raed-association.firebaseapp.com",
    databaseURL: "https://raed-association.firebaseio.com",
    projectId: "raed-association",
    storageBucket: "raed-association.appspot.com",
    messagingSenderId: "6412941637",
    appId: "1:6412941637:web:a830d288d1eb9108cde62c"
};
let firebaseConfig = firebase.initializeApp(config);

export default firebaseConfig;
