// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD6vKQqDr3lB5L35WIdXu8gIseLkbN6vxQ',
  authDomain: 'iths-crossplatform-ec935.firebaseapp.com',
  projectId: 'iths-crossplatform-ec935',
  storageBucket: 'iths-crossplatform-ec935.appspot.com',
  messagingSenderId: '697568303901',
  appId: '1:697568303901:web:91064e59471ab8baa49ff4',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
