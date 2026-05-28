// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyw2VBPSTmbtbW9rYPq7iKNtBQ6rQ6874",
  authDomain: "netflixgpt-5fd09.firebaseapp.com",
  projectId: "netflixgpt-5fd09",
  storageBucket: "netflixgpt-5fd09.firebasestorage.app",
  messagingSenderId: "257463992430",
  appId: "1:257463992430:web:7d93fd4a977f93d10b667f",
  measurementId: "G-KBVC6VS6E5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
