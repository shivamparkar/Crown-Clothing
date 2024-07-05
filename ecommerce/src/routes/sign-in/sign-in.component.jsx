import React from 'react'

import { signInWithPopupGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utilis'


const Sign = () => {
  
  const logGoogleUser = async () => {
    const {user} = await signInWithPopupGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  

  return (
    <div>
      <h1> Welcome in Pagex</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
    </div>
  )
}

export default Sign
