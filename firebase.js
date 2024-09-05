//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
//   import { getAuth , createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

//   const firebaseConfig = {
//     apiKey: "AIzaSyDdr0llpD-fcFsqEd9LyYykw1Zfdz2QTV0",
//     authDomain: "school-website-4318b.firebaseapp.com",
//     projectId: "school-website-4318b",
//     storageBucket: "school-website-4318b.appspot.com",
//     messagingSenderId: "224959155344",
//     appId: "1:224959155344:web:6760c3a791559d08515c15",
//     measurementId: "G-TCGB37140F"
//   };

//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);




// export {auth,createUserWithEmailAndPassword}


// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore,doc, setDoc , getDoc  } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDdr0llpD-fcFsqEd9LyYykw1Zfdz2QTV0",
  authDomain: "school-website-4318b.firebaseapp.com",
  projectId: "school-website-4318b",
  storageBucket: "school-website-4318b.appspot.com",
  messagingSenderId: "224959155344",
  appId: "1:224959155344:web:6760c3a791559d08515c15",
  measurementId: "G-TCGB37140F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword , setDoc, doc , getDoc, db };
