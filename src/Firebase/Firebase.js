import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
   apiKey: '' ,
   authDomain: "sportsmart-e1ed1.firebaseapp.com",
   projectId: "sportsmart-e1ed1",
   storageBucket: "sportsmart-e1ed1.appspot.com",
   messagingSenderId: "559908581658",
   appId: "APP_ID",
 };



 
const app = initializeApp(firebaseConfig);

const firedb = getFirestore(app);
const auth = getAuth(app);

export {firedb,auth};


