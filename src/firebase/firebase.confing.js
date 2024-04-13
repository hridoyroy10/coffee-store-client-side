// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6dWXDlHCfsuKrvPKFnIXRzOqwFi9Y_Ns",
  authDomain: "auth-router-context-8a40e.firebaseapp.com",
  projectId: "auth-router-context-8a40e",
  storageBucket: "auth-router-context-8a40e.appspot.com",
  messagingSenderId: "982037985393",
  appId: "1:982037985393:web:6db5e2cdb041441e7fc3d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app);