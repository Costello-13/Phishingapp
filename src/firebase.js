// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

  apiKey: "AIzaSyDeXMzLmtj5UzOEN9OiHYcWqJVOFeMBT60",

  authDomain: "projectphish-22ab6.firebaseapp.com",

  projectId: "projectphish-22ab6",

  storageBucket: "projectphish-22ab6.appspot.com",

  messagingSenderId: "735538299446",

  appId: "1:735538299446:web:ad6d403e3e556bde360e97",

  measurementId: "G-CQ64DV88HZ"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default firebaseConfig;