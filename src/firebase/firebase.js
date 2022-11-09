import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8grA8wYQSpovSoj2DpTO-7p8w_qYoTEw",
  authDomain: "react-firebase-chat-e03e7.firebaseapp.com",
  projectId: "react-firebase-chat-e03e7",
  storageBucket: "react-firebase-chat-e03e7.appspot.com",
  messagingSenderId: "768281704956",
  appId: "1:768281704956:web:2cb49d7ccdbf12ff0b9a79",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
