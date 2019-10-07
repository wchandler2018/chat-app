import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAD3NaPHUtbzEFnl-qGODKIpNGqaenBOUI",
  authDomain: "chatty-devs.firebaseapp.com",
  databaseURL: "https://chatty-devs.firebaseio.com",
  projectId: "chatty-devs",
  storageBucket: "",
  messagingSenderId: "292186075959",
  appId: "1:292186075959:web:79d907c74627b6544a20b2",
  measurementId: "G-HHCFC6VFRB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
