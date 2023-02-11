// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
/* import { initializeApp } from "firebase/app"; */
const firebaseConfig = {
  apiKey: "AIzaSyDzzNdWu--q2HbbcRQcStztw6_o2rOwurI",
  authDomain: "bro-app-e3b89.firebaseapp.com",
  projectId: "bro-app-e3b89",
  storageBucket: "bro-app-e3b89.appspot.com",
  messagingSenderId: "302687418344",
  appId: "1:302687418344:web:17c040e9f8073f2e49565d",
  measurementId: "G-L1CSGSC3NK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
