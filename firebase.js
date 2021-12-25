import firebase from "firebase";

const firebaseConfig = {
    apiKey:"AIzaSyBdb7Wpk1C5qC1F3J5ZcXHynQnlYqZvg4s",
    authDomain: "whatsapp-ccea8.firebaseapp.com",
    projectId: "whatsapp-ccea8",
    storageBucket: "whatsapp-ccea8.appspot.com",
    messagingSenderId: "1075916722143",
    appId: "1:1075916722143:web:da8e7550311584cc803e6a"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const auth =app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};
