// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4ur3JkvAYIsUDEj5gU1JxxlZRXMCDccA",
  authDomain: "react-curso-a5376.firebaseapp.com",
  projectId: "react-curso-a5376",
  storageBucket: "react-curso-a5376.firebasestorage.app",
  messagingSenderId: "193416157584",
  appId: "1:193416157584:web:a78a74faa3f25d7ed9bb15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para cuando veamos el login
const auth = getAuth(app);

export { db, auth };