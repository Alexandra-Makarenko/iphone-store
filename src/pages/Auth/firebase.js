// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

// const API_KEY = import.meta.env.API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyDKBIssyUbLB6G2KVH9sAuiZlgSeUxLy_Y",
  authDomain: "authproject-ea853.firebaseapp.com",
  projectId: "authproject-ea853",
  storageBucket: "authproject-ea853.appspot.com",
  messagingSenderId: "769248912942",
  appId: "1:769248912942:web:0e2d1aef78323fa2a5a1bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();