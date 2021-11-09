import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBn0JzIdz4OTiNBd_-USJF0k9xCODoVSGU",
  authDomain: "codewithhamza-95049.firebaseapp.com",
  projectId: "codewithhamza-95049",
  storageBucket: "codewithhamza-95049.appspot.com",
  messagingSenderId: "847354128508",
  appId: "1:847354128508:web:5b93a3b4fba1319563c1f9",
  measurementId: "G-B56484YDT6"
  });

  firebase.analytics();

  const storage = firebaseApp.storage();
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, storage}; 