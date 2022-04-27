// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDytpQMG3Mt1GnSyvDhl3ytiPmPiKZmvUM",
  authDomain: "runat-codertest.firebaseapp.com",
  projectId: "runat-codertest",
  storageBucket: "runat-codertest.appspot.com",
  messagingSenderId: "362498259750",
  appId: "1:362498259750:web:adc2e1fc319d350fca1fe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(app)