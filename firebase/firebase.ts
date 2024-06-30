// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
// import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// export const auth = firebase.auth();
export { db };
// export default firebase;