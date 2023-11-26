// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ZI3P-JaAmoAIjxCWRnaAp-gVMnG_BaE",
  authDomain: "fmascarell-react.firebaseapp.com",
  projectId: "fmascarell-react",
  storageBucket: "fmascarell-react.appspot.com",
  messagingSenderId: "369876412594",
  appId: "1:369876412594:web:a4b50a0c12d1834ea9c1ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initializerFirebase = () => app 