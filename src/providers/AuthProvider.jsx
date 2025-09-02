import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // declaring a state to hold user info
    const [user, setUser] = useState(null);

    // Create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    

    // create an observer to track users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("User in the auth state change", currentUser);
        })
        return () =>{
            unsubscribe(); //? clear the state after unmount the comp
        } 
    },[]);


    // context value
    const authInfo = {
        user,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;