// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmbWRXpwfUPdbdlgtLJDyWxSbSCs87OoM",
  authDomain: "personal-web-de37b.firebaseapp.com",
  projectId: "personal-web-de37b",
  storageBucket: "personal-web-de37b.firebasestorage.app",
  messagingSenderId: "879762917753",
  appId: "1:879762917753:web:f93801e10980045fde87a8",
  measurementId: "G-JF4QEJMJH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
