// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqNfVDIMGurh43TBNEnpWGuDU8WWeZEg0",
  authDomain: "mod-b-hackathon.firebaseapp.com",
  databaseURL: "https://mod-b-hackathon-default-rtdb.firebaseio.com",
  projectId: "mod-b-hackathon",
  storageBucket: "mod-b-hackathon.appspot.com",
  messagingSenderId: "1033444623005",
  appId: "1:1033444623005:web:126580b95f48da01f48a74",
  measurementId: "G-6QNK4MHDRL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
