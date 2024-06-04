// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOkAL608uy0UvoWZe7PxJ4zLAOR2cJKqE",
  authDomain: "galloflix-6e4c3.firebaseapp.com",
  projectId: "galloflix-6e4c3",
  storageBucket: "galloflix-6e4c3.appspot.com",
  messagingSenderId: "230388462963",
  appId: "1:230388462963:web:f869217f2193f87f174106",
  measurementId: "G-GXQ16W2FL8"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
