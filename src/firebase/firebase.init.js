// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOrEB1Xp6WVRwb3Q0F1MqcI8PTZK2Y2DQ",
  authDomain: "react-dragon-news-auth-d3850.firebaseapp.com",
  projectId: "react-dragon-news-auth-d3850",
  storageBucket: "react-dragon-news-auth-d3850.firebasestorage.app",
  messagingSenderId: "145227690947",
  appId: "1:145227690947:web:aeb9092d32133ca1988376"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;