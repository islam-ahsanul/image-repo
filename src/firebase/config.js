// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyClSJpmxbN8cKF8WCVAdi7qZKDt1GCjrPg',
  authDomain: 'react-image-repo-3b8d2.firebaseapp.com',
  projectId: 'react-image-repo-3b8d2',
  storageBucket: 'react-image-repo-3b8d2.appspot.com',
  messagingSenderId: '580634895286',
  appId: '1:580634895286:web:227fcbf958d98971149717',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
