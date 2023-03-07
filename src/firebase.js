import { initializeApp } from "firebase/app";
console.log(process.env)

const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId:process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);