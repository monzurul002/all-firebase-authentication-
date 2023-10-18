import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config.js"
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null)
const auth = getAuth(app)
// eslint-disable-next-line react/prop-types
const googleProvider = new GoogleAuthProvider();
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    //google sign in 
    const googleSingIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    

    const userCreateWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //send verification mail

    const sendVerification = (email) => {
        return sendEmailVerification(email)
    }

    //update profile

    const profileUpdate = (user, name) => {
        return updateProfile(user, {
            displayName: name
        })
    }

        const emailPasswordLogin =(email, password)=>{
         return   signInWithEmailAndPassword(auth,email,password)
        }

    //get user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(!loading)
        })
        return () => {
            return unsubscribe()
        }

    }, [])
    //logout
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        googleSingIn,
        user,
        logOut,
        userCreateWithEmail,
        sendVerification,
        profileUpdate,
        loading,
        emailPasswordLogin
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;