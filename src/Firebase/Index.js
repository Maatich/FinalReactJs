// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOUQS7KcI1-7UMQ2-JHzYZSZ3nrGtnyjE",
  authDomain: "tiendaonline-34850.firebaseapp.com",
  projectId: "tiendaonline-34850",
  storageBucket: "tiendaonline-34850.appspot.com",
  messagingSenderId: "429768574531",
  appId: "1:429768574531:web:4e97e0d285992f3f49b6f6",
  measurementId: "G-NFK7FJ8QCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)