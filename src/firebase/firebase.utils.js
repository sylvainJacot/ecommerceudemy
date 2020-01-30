import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCVB7sVSP9ze-7pI9dRr4UEIgiMrCL_qSg",
    authDomain: "ecommerce-udemy-35e5f.firebaseapp.com",
    databaseURL: "https://ecommerce-udemy-35e5f.firebaseio.com",
    projectId: "ecommerce-udemy-35e5f",
    storageBucket: "ecommerce-udemy-35e5f.appspot.com",
    messagingSenderId: "1030822702734",
    appId: "1:1030822702734:web:5c097def33eb5639b4e3df",
    measurementId: "G-8Y9MBRHSBK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
