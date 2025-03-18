// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPKc0bSnyWOEQHUD_DlODvwHnkDLejBdE",
  authDomain: "memory-matching-game-145f8.firebaseapp.com",
  projectId: "memory-matching-game-145f8",
  storageBucket: "memory-matching-game-145f8.firebasestorage.app",
  messagingSenderId: "1567177930",
  appId: "1:1567177930:web:f340eefaa562a6d4fc8833",
  measurementId: "G-2DJZR8WWZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 