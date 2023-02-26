import firebase from './firebase';
import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA2wYGO3uU4O63ASEACQe_okOeqHVR13_Q",
    authDomain: "makarov-project-db.firebaseapp.com",
    projectId: "makarov-project-db",
    storageBucket: "makarov-project-db.appspot.com",
    messagingSenderId: "622091307836",
    appId: "1:622091307836:web:87746b998f9475ec60ac39"
  };
  
  // Initialize Firebase
  firebase = initializeApp(firebaseConfig);

  export const db = getFirestore();

  export const createLunaAndKDocument = async (productItem) => {
    const LunaAndKDocRef = doc(db, 'products', productItem.uid);
    console.log(LunaAndKDocRef);
  }

  export default firebase;