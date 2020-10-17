import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCg4fwB9ztUTaq8v4UPQ-6zjo4eHvhQcE8",
  authDomain: "crwn-db-de5f0.firebaseapp.com",
  databaseURL: "https://crwn-db-de5f0.firebaseio.com",
  projectId: "crwn-db-de5f0",
  storageBucket: "crwn-db-de5f0.appspot.com",
  messagingSenderId: "969017343905",
  appId: "1:969017343905:web:6cf277c54a4bd30abd15e0",
  measurementId: "G-EQ4JFYM3HL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
