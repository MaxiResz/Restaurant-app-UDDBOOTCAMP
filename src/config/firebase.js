// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMRFIVsXbrFzjcaP2KpJg1GZOP6KwN2Xc",
  authDomain: "proyecto-4-37794.firebaseapp.com",
  projectId: "proyecto-4-37794",
  storageBucket: "proyecto-4-37794.appspot.com",
  messagingSenderId: "310983906158",
  appId: "1:310983906158:web:a8da5bb461b4c27465677f"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
//
export const auth = getAuth(appFirebase)
export const db = getFirestore(appFirebase)