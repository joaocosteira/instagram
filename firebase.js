// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMsTkBB0yOM23MJvjFJzyVhz6YuDKCshQ",
  authDomain: "instagram-clone-4e75d.firebaseapp.com",
  projectId: "instagram-clone-4e75d",
  storageBucket: "instagram-clone-4e75d.appspot.com",
  messagingSenderId: "824175876278",
  appId: "1:824175876278:web:b7e623c8283017f717ee17",
  measurementId: "G-C4VC0H1T6V"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
//const analytics = getAnalytics(app);

export { app , db, storage }