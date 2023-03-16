import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './data/firebase'


const Auth = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
        })
    })
    // console.log("currentUser: "+currentUser);
    return  {
        currentUser
    }
}

export default Auth