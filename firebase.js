import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBTO_YTwuHU9OOp96MEsspzTasQNQ76gr4",
    authDomain: "netflix-clone-7f0a1.firebaseapp.com",
    projectId: "netflix-clone-7f0a1",
    storageBucket: "netflix-clone-7f0a1.appspot.com",
    messagingSenderId: "52035408843",
    appId: "1:52035408843:web:c6b5be599b9c9aafa89c4e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
  