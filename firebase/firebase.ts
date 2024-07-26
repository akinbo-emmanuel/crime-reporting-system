// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
// import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// export const auth = firebase.auth();
export { db, storage, auth };
// export default firebase;