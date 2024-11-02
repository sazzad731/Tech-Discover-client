import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"
import useAxiosPublic from "../hooks/useAxiosPublic";

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();


  const signUpWithPassword = (email, password)=>{
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, photo)=>{
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  useEffect(() =>
  {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>
    {
      setUser(currentUser)
      setIsLoading(false);
    })
    return () => unSubscribe();
  }, []);

  console.log(user);

  const authInfo = {
    user,
    isLoading,
    setIsLoading,
    googleSignIn,
    signUpWithPassword,
    updateUserProfile,
  };
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};


AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;