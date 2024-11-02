import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config"
import useAxiosPublic from "../hooks/useAxiosPublic";

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() =>
  {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>
    {
      setUser(currentUser)
      setIsLoading(false);
    })
    return () => unSubscribe();
  }, []);

  // console.log(user);

  const authInfo = { user, isLoading, setIsLoading, googleSignIn };
  
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