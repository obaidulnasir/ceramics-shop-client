import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading]= useState(true);

  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  //   google login
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        handleRegisterUserInfo(user.email);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=>setIsLoading(false));
  };

  //  logout
  const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=> setIsLoading(false));
  };

  //   user registration
  const handleUserRegister = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        handleRegisterUserInfo(email);
        console.log(name);
      })
      .catch((error) => {
        setError(error.message)
      });
  };

  //   user email password login
  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
          setUser(result.user)
          alert("user Logged in")
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };
  //   on auth stage change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
  }, [auth]);


 /*  ================================
  Collect User Email
  ================================ */
  const handleRegisterUserInfo= (email)=>{
    console.log(email)
    fetch("http://localhost:5000/addCustomer", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
    .then((res) => res.json())
    .then((result) => console.log(result));
  };

  return {
    isLoading,
    user,
    error,
    signInWithGoogle,
    handleLogout,
    handleUserLogin,
    handleUserRegister
  };
};


export default useFirebase;
