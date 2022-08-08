import {firestore} from "firebase/firestore";






const firebaseApp =     {
        apiKey: "AIzaSyCDDQXxxzLQomKvkjZ1G6yRPPEkuXWdmic",
        authDomain: "supply-chain-management-6cf4f.firebaseapp.com",
        projectId: "supply-chain-management-6cf4f",
        storageBucket: "supply-chain-management-6cf4f.appspot.com",
        messagingSenderId: "515556060944",
        appId: "1:515556060944:web:31d80075ef2a63500ebf95",
        measurementId: "G-TYZZ92DFQG"
};
const db = firestore.initializeApp(firebaseApp);

export { db };