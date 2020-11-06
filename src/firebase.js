import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCudHS0jWCDVX1yjXMX7wz5X3u-vYkDrw",
  authDomain: "contacts-eaae9.firebaseapp.com",
  databaseURL: "https://contacts-eaae9.firebaseio.com",
  projectId: "contacts-eaae9",
  storageBucket: "contacts-eaae9.appspot.com",
  messagingSenderId: "749213213925",
  appId: "1:749213213925:web:4080a240de9eec4c1d600c",
});

var db = firebaseApp.firestore();
export { db };
