// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa6WG9L7b3qzTulkgPRyxZgf9u7xrnNeE",
  authDomain: "redux-store-da94e.firebaseapp.com",
  projectId: "redux-store-da94e",
  storageBucket: "redux-store-da94e.appspot.com",
  messagingSenderId: "401721991976",
  appId: "1:401721991976:web:0d2a2bdc132232135b261d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };