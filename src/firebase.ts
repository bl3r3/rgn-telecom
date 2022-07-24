// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmnja19HSunBRPuOd79aQiDBIPV7iAG0E",
  authDomain: "rgn-telecom.firebaseapp.com",
  projectId: "rgn-telecom",
  storageBucket: "rgn-telecom.appspot.com",
  messagingSenderId: "673614867877",
  appId: "1:673614867877:web:12093f03a03f342cbbcc4c",
  measurementId: "G-Z0H027XM89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
