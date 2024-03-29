import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  // getDoc,
  // setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2wYGO3uU4O63ASEACQe_okOeqHVR13_Q",
  authDomain: "makarov-project-db.firebaseapp.com",
  projectId: "makarov-project-db",
  storageBucket: "makarov-project-db.appspot.com",
  messagingSenderId: "622091307836",
  appId: "1:622091307836:web:87746b998f9475ec60ac39",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, "products");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const productsMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title] = items;
    return acc;
  }, []);

  return productsMap;
};

export default firebase;
