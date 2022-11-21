// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBmK2pqONNZPkrYsW9myLFqwNugjTOrmNs',
  authDomain: 'trybemarket-2e0ce.firebaseapp.com',
  projectId: 'trybemarket-2e0ce',
  storageBucket: 'trybemarket-2e0ce.appspot.com',
  messagingSenderId: '570894398934',
  appId: '1:570894398934:web:83238781180bde6006a077',
  measurementId: 'G-ZX8RPQJ1P3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);