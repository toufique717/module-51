// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClWA8y1E6lZaB3GhY8uWvZUX0zOjf35rE",
  authDomain: "final-module-51.firebaseapp.com",
  projectId: "final-module-51",
  storageBucket: "final-module-51.firebasestorage.app",
  messagingSenderId: "458015345080",
  appId: "1:458015345080:web:ae1d754802a6c124d5e74d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;