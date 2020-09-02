import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaa1-DZXwwczbLVF7-bjB-iIlkr-d6Z9Q",
  authDomain: "whatsapp-clone-e3f87.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-e3f87.firebaseio.com",
  projectId: "whatsapp-clone-e3f87",
  storageBucket: "whatsapp-clone-e3f87.appspot.com",
  messagingSenderId: "288288971045",
  appId: "1:288288971045:web:047c28759e502fdf9aa2cc",
  measurementId: "G-GB0Z7H41RZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
