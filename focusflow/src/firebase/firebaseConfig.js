// Firebase configuration and initialization
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBIX5K-I91urrSdRsiSY-oUIrL736T0xpY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "testing-e0666.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "testing-e0666",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "testing-e0666.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "86188815594",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:86188815594:web:e5eac4e048ff1a5559d393",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-NDJSSYDQ4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;