import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBimw_zoIxJrRkgb1Ke05nJs4QTAt3T4LE",
  authDomain: "crwn-db-63556.firebaseapp.com",
  databaseURL: "https://crwn-db-63556.firebaseio.com",
  projectId: "crwn-db-63556",
  storageBucket: "crwn-db-63556.appspot.com",
  messagingSenderId: "1072094034955",
  appId: "1:1072094034955:web:31711dfa52c2f21cee5b0e",
  measurementId: "G-3Y0ZMZ0JBL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
