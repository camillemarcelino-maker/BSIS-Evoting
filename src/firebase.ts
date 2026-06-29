// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdOlOqQpO1E-UvX1_lTQgQBgf_37MTflE",
  authDomain: "bsis-evoting-system.firebaseapp.com",
  projectId: "bsis-evoting-system",
  storageBucket: "bsis-evoting-system.firebasestorage.app",
  messagingSenderId: "514248372945",
  appId: "1:514248372945:web:6f50a831f7db264d1ecbf0",
  measurementId: "G-HBJN5HLYSN",
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db, firebaseConfig };
