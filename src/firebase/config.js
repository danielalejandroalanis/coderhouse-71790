import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPcMASLxoL6mgcIrVT4UE-eueJityKfAk",
  authDomain: "coderhouse-71790.firebaseapp.com",
  projectId: "coderhouse-71790",
  storageBucket: "coderhouse-71790.appspot.com",
  messagingSenderId: "1057476625626",
  appId: "1:1057476625626:web:9ec4ba2017267883e651e3",
};

//Inicializamos Firebase en nuestra App
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
