// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
// import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// export const auth = firebase.auth();
export { db, storage };
// export default firebase;