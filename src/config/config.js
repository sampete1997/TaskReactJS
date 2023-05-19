// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOdY9INQND9LdxHxg49X7ttlklpwA_n8k",
  authDomain: "myapp-5bb2b.firebaseapp.com",
  projectId: "myapp-5bb2b",
  storageBucket: "myapp-5bb2b.appspot.com",
  messagingSenderId: "464045491347",
  appId: "1:464045491347:web:98c5057c9a9f8bad667966",
  measurementId: "G-X28PEK1H96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider}