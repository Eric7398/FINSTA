// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6LG9Xk-kxJT6xC9nlkVYs31BnN1_22_I",
    authDomain: "finsta-9b9a5.firebaseapp.com",
    projectId: "finsta-9b9a5",
    storageBucket: "finsta-9b9a5.appspot.com",
    messagingSenderId: "768971286712",
    appId: "1:768971286712:web:2a5de5d0b1f7cf39db2c4d",
    measurementId: "G-8TZLRVWJ2H"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
const analytics = getAnalytics(app);