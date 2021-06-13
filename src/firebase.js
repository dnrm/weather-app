import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyA7ucAlEo-z6Tg4JZNnoX9yqmbS5kx7lww",
    authDomain: "dnrm-firebase.firebaseapp.com",
    databaseURL: "https://dnrm-firebase.firebaseio.com",
    projectId: "dnrm-firebase",
    storageBucket: "dnrm-firebase.appspot.com",
    messagingSenderId: "378356505820",
    appId: "1:378356505820:web:7b288b4779987d7ec3e819",
});

export let db = firebase.firestore();

export default firebase;
