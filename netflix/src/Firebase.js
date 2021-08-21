// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCqPAD18rTBB5vOCXZXBzJ2k-7EYgYKfJ0",
    authDomain: "netflix-9b98d.firebaseapp.com",
    projectId: "netflix-9b98d",
    storageBucket: "netflix-9b98d.appspot.com",
    messagingSenderId: "443633603746",
    appId: "1:443633603746:web:e5f82d76dc0c597925b3fb",
    measurementId: "G-7QH1XQWY60"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { auth };

  export default db;