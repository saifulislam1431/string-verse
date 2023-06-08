import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase';
import axios from 'axios';


const auth = getAuth(app);
export const UserAuth = createContext(null);
const Auth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLog = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const facebookLog = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }



    const updateUser = (loggedUser, name, photo) => {
        setLoading(true)
        return updateProfile(loggedUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if (currentUser) {
                // const email= currentUser.email;
                axios.post("http://localhost:5000/jwt", {
                    email: currentUser.email
                }).then(data => {
                    // console.log(data.data.token);
                    localStorage.setItem("access-token", data.data.token)
                    setLoading(false)
                })
            } else {
                localStorage.removeItem("access-token")
            }
        })
        return () => unsubscribe();
    }, [])

    const userInfo = {
        user,
        updateUser,
        signUp,
        signIn,
        googleLog,
        facebookLog,
        loading,
        logOut
    }
    return (
        <UserAuth.Provider value={userInfo}>
            {children}
        </UserAuth.Provider>
    );
};

export default Auth;