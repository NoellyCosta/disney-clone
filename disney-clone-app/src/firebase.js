import firebase from "firebase"




const firebaseConfig = {
  apiKey: "AIzaSyDK_B7snrVz4KGbICaleAZS8rq6KLB8wRA",
  authDomain: "app-disney-noelly.firebaseapp.com",
  projectId: "app-disney-noelly",
  storageBucket: "app-disney-noelly.appspot.com",
  messagingSenderId: "834111849098",
  appId: "1:834111849098:web:be7209cbbee6247d07e373",
  measurementId: "G-CPPDSL9KL3"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;