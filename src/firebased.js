// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcageuQvrmHIHCDptU7VI3-tlwNVV2pLE",
  authDomain: "doctor-3a042.firebaseapp.com",
  projectId: "doctor-3a042",
  storageBucket: "doctor-3a042.appspot.com",
  messagingSenderId: "1039735001589",
  appId: "1:1039735001589:web:064940d3d23bb2c25b10bc",
  measurementId: "G-HFS169CNVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);  