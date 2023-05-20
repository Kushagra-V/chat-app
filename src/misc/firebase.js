import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBxYM7CCtpxy8626fpfjhQ139r3tEBbeWI',
  authDomain: 'chat-web-app-9f8f8.firebaseapp.com',
  databaseURL: 'https://chat-web-app-9f8f8-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-9f8f8',
  storageBucket: 'chat-web-app-9f8f8.appspot.com',
  messagingSenderId: '143545388696',
  appId: '1:143545388696:web:691fbf185ecb7340c64aed',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
