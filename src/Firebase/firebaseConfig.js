// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore';
import Axios from 'axios'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG-5-6_eepvYBGbd82oddm1P7L2ahEMeQ",
  authDomain: "portfolio-website-101.firebaseapp.com",
  projectId: "portfolio-website-101",
  storageBucket: "portfolio-website-101.appspot.com",
  messagingSenderId: "1037518072749",
  appId: "1:1037518072749:web:0e6fec92ed7d3a62bf8f24"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export { Axios, db }