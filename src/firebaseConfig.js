import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB7Gt73myS5PlyIaqHZ381MH7fgeWzWe3c",
  authDomain: "sofiaa-entregafinal.firebaseapp.com",
  projectId: "sofiaa-entregafinal",
  storageBucket: "sofiaa-entregafinal.appspot.com",
  messagingSenderId: "726918146835",
  appId: "1:726918146835:web:50151cd75d31049568c8e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)