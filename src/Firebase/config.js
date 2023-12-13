import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1ZI3P-JaAmoAIjxCWRnaAp-gVMnG_BaE",
  authDomain: "fmascarell-react.firebaseapp.com",
  projectId: "fmascarell-react",
  storageBucket: "fmascarell-react.appspot.com",
  messagingSenderId: "369876412594",
  appId: "1:369876412594:web:a4b50a0c12d1834ea9c1ab"
};

const app = initializeApp(firebaseConfig);
export const initializerFirebase = () => app 