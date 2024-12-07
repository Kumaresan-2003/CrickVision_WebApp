// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCfVUJGeuKdeJ3B6FAjXU7yxqRQmzSPjcw",
  authDomain: "react-auth-app-d1a9f.firebaseapp.com",
  projectId: "react-auth-app-d1a9f",
  storageBucket: "react-auth-app-d1a9f.firebasestorage.app",
  messagingSenderId: "168700032899",
  appId: "1:168700032899:web:f343710a2675adfa2da8b6",
  measurementId: "G-TEKQ9L5FRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;