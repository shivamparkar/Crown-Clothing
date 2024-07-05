import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn8jJgRG9P_dX8zQPxwnRbJcYUzfmPWic",
  authDomain: "crwn-clothing-db-79a8e.firebaseapp.com",
  projectId: "crwn-clothing-db-79a8e",
  storageBucket: "crwn-clothing-db-79a8e.appspot.com",
  messagingSenderId: "421186488554",
  appId: "1:421186488554:web:3cd8e2210e58f0b96a2f93",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const db = getFirestore();


export const createUserDocumentFromAuth = async(userAuth) => {
  
  try{
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log("error creating the user", error.message);
        }
    }

    return userDocRef;
  

}catch(error){
     console.log("something went wrong", error);
  } 

 
  
}





export const auth = getAuth();

export const signInWithPopupGooglePopup = () => signInWithPopup(auth, provider);
