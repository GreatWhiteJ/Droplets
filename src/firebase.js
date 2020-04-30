import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBX4_h2ZP-4pupDHXks9l5YL-92xSoFmmM",
  authDomain: "samebase-d2e15.firebaseapp.com",
  databaseURL: "https://samebase-d2e15.firebaseio.com",
  projectId: "samebase-d2e15",
  storageBucket: "samebase-d2e15.appspot.com",
  messagingSenderId: "504717594119",
  appId: "1:504717594119:web:5534754aacb79e3f6724a2",
  measurementId: "G-XV5M718D6J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
