
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnDS4TjJF9ocw4Sse5wTQ1APTNgLBiwa4",
  authDomain: "disney-clone-7bb27.firebaseapp.com",
  projectId: "disney-clone-7bb27",
  storageBucket: "disney-clone-7bb27.appspot.com",
  messagingSenderId: "1007565514914",
  appId: "1:1007565514914:web:ee5a74ca75020aea25cffb",
  measurementId: "G-HEJ4PV4J3R",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);

export { db, auth, provider, storage };
