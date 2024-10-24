// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4s6_dc4_XnBy80SQmAi5bz-3K9wpCK_0",
  authDomain: "fir-db-65563.firebaseapp.com",
  projectId: "fir-db-65563",
  storageBucket: "fir-db-65563.appspot.com",
  messagingSenderId: "362216426968",
  appId: "1:362216426968:web:8a3b40c5ab24b74ae4b6ad",
  measurementId: "G-GSKJ6HBXLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { db, auth }