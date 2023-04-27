// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVb2e6q4Gb7i0F6HX1eAV05rj58C36mHk",
  authDomain: "weather-hub-aee7b.firebaseapp.com",
  projectId: "weather-hub-aee7b",
  storageBucket: "weather-hub-aee7b.appspot.com",
  messagingSenderId: "629593216743",
  appId: "1:629593216743:web:532ef29f3dc222a8747442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig