// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9jCRw67K4PxRgbbE_QvpF0zpHmilbUcg",
  authDomain: "proyectojosegines.firebaseapp.com",
  projectId: "proyectojosegines",
  storageBucket: "proyectojosegines.firebasestorage.app",
  messagingSenderId: "376531964849",
  appId: "1:376531964849:web:1f3b37e78823b3cacd2390",
  measurementId: "G-663B7BYNE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app);
