import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCnDIsLh2YuBeC8im2JaOWJgvjRFpFAUcw",
  authDomain: "facebook-clonef.firebaseapp.com",
  projectId: "facebook-clonef",
  storageBucket: "facebook-clonef.appspot.com",
  messagingSenderId: "543630765414",
  appId: "1:543630765414:web:52d2190099e0be7f36aca7",
  measurementId: "G-0FVDQNYK91"
};
   
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;




