import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAZz-_uH7BMb1C6Lt99cwVR744iLwVjP4U",
  authDomain: "crwn-db-804c5.firebaseapp.com",
  projectId: "crwn-db-804c5",
  storageBucket: "crwn-db-804c5.appspot.com",
  messagingSenderId: "449741341500",
  appId: "1:449741341500:web:8f7cbc27d0c7481fba9439",
  measurementId: "G-XVHWGY6H6H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
