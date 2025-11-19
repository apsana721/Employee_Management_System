import { initializeApp } from "firebase/app";
// !Authentication Provided by the firebaseauth
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ3fGRgXmytFAprX1s4lSmZsLQCVvphig",
  authDomain: "ems-project-a001e.firebaseapp.com",
  projectId: "ems-project-a001e",
  storageBucket: "ems-project-a001e.firebasestorage.app",
  messagingSenderId: "410678304551",
  appId: "1:410678304551:web:182eacc20b7d2d8e819302"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let __AUTH = getAuth(firebaseApp);
