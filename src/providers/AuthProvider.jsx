import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // declaring a state to hold user info
    const [user, setUser] = useState(null);
    // declaring a state for loading
    const [loading, setLoading] = useState(true);

    // Create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signin user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign out user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // create an observer to track users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe(); //? clear the state after unmount the comp
        } 
    },[]);


    // context value
    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;