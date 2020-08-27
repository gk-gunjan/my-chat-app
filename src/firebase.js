import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA4XBU1FlNxZ8mC0Q08xQ5GHYRjPawU_20",
    authDomain: "mychat-app-fba7d.firebaseapp.com",
    databaseURL: "https://mychat-app-fba7d.firebaseio.com",
    projectId: "mychat-app-fba7d",
    storageBucket: "mychat-app-fba7d.appspot.com",
    messagingSenderId: "240494741683",
    appId: "1:240494741683:web:a097978eefcca2def088c6",
    measurementId: "G-PQWBGFWY8E"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
