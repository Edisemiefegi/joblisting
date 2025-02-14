import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYhzqB15OEWqAquDuN9ok6uyPkIwyqPIQ",
  authDomain: "joblisting-d6c8f.firebaseapp.com",
  projectId: "joblisting-d6c8f",
  storageBucket: "joblisting-d6c8f.firebasestorage.app",
  messagingSenderId: "32257721152",
  appId: "1:32257721152:web:2437c4eb60ef175fadb0a5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  app,
  db,
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  getDoc,
  auth,
  getDocs,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
