import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALmS4GVzPFld_PL7mX2aEF-EdndvqyWUM",
  authDomain: "crwn-clothing-tut-726cd.firebaseapp.com",
  projectId: "crwn-clothing-tut-726cd",
  storageBucket: "crwn-clothing-tut-726cd.appspot.com",
  messagingSenderId: "695845868654",
  appId: "1:695845868654:web:32ce32cbaa77f6c62f027f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error from loging the user", error.message);
    }
  }
  return userDocRef;
};
