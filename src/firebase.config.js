import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5Smthtwb5Vh23D6SP1kZQo62iD1Fv9KQ",
  authDomain: "postify-159e3.firebaseapp.com",
  projectId: "postify-159e3",
  storageBucket: "postify-159e3.appspot.com",
  messagingSenderId: "665762106600",
  appId: "1:665762106600:web:89d25365dd1d8a6a4e8d5d",
  measurementId: "G-H2ZZN6LVN2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
