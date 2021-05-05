import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDVYxXHVTECK0ek1mUm9bOZfGal4DzmqvE",
  authDomain: "miniproject-c56e3.firebaseapp.com",
  projectId: "miniproject-c56e3",
  storageBucket: "miniproject-c56e3.appspot.com",
  messagingSenderId: "1031902967272",
  appId: "1:1031902967272:web:8a38e19355c996c557e05d",
  measurementId: "G-G59K9YE4DZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
