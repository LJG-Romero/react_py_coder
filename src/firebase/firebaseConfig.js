
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU4DNsX9s0I7LiadNyJDhJr7MSX-7Ph9U",
  authDomain: "fir-react-py-coder.firebaseapp.com",
  projectId: "fir-react-py-coder",
  storageBucket: "fir-react-py-coder.appspot.com",
  messagingSenderId: "75912151551",
  appId: "1:75912151551:web:3cde43686fe8fbe8ef67ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);