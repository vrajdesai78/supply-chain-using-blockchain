import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    
    collection,
    where,
    addDoc,
    Firestore,
  } from "firebase/firestore";


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from "./App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDDQXxxzLQomKvkjZ1G6yRPPEkuXWdmic",
  authDomain: "supply-chain-management-6cf4f.firebaseapp.com",
  projectId: "supply-chain-management-6cf4f",
  storageBucket: "supply-chain-management-6cf4f.appspot.com",
  messagingSenderId: "515556060944",
  appId: "1:515556060944:web:31d80075ef2a63500ebf95",
  measurementId: "G-TYZZ92DFQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore();

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error("got error");
      alert(err.message);
    }
  };
  
  const writedata = async(uid)=>{
    console.log("Inside write data");
   
 
 

    try{
      console.log("Inside try block")
      const docRef = await addDoc(collection(db, "Users"),{
        name:"boran",
        userId: uid,
        boran:"role"
      });
      console.log("Document writtent with iId: ", docRef.id);
    }
    catch(e){
      console.log("Error adding document",e);
    }
  }

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };


 
  export {
    auth,
    db,
    app,
    signInWithGoogle,
    signInWithEmailAndPassword,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    addDoc,
    writedata
  };