import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyACmfL7Qdpfy1thpQw5JBcMOXWOkHokAmA",
  authDomain: "droplets-4dfb3.firebaseapp.com",
  databaseURL: "https://droplets-4dfb3.firebaseio.com",
  projectId: "droplets-4dfb3",
  storageBucket: "droplets-4dfb3.appspot.com",
  messagingSenderId: "320999062142",
  appId: "1:320999062142:web:ce5dbaed0e41d76145f62f",
  measurementId: "G-HD9KRJMVRT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
