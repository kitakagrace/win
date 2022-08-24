// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCmo3Rivq-uUFQ7bhwiuYA7d1PTgfISLKE",

  authDomain: "simplified-8bb49.firebaseapp.com",

  databaseURL: "https://simplified-8bb49.firebaseio.com",

  projectId: "simplified-8bb49",

  storageBucket: "simplified-8bb49.appspot.com",

  messagingSenderId: "626077542195",

  appId: "1:626077542195:web:e0022a24405b71f408c046"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth  = getAuth(app)
const db = getDatabase(app);

export {auth, db}