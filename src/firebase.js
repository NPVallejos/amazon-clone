import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxfWtCDKSKpHABowEAHvCKjBeLpG9bEPk",
  authDomain: "challenge-ec191.firebaseapp.com",
  projectId: "challenge-ec191",
  storageBucket: "challenge-ec191.appspot.com",
  messagingSenderId: "689751102435",
  appId: "1:689751102435:web:14509bc2a0b23f51aa06d6",
  measurementId: "G-RFT8V93TBE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Real time firebase
const db = firebaseApp.firestore();

// Handle authentication
const auth = firebase.auth();

export { db, auth };