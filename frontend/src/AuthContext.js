import React, { useState, useEffect } from "react";
import app from "./fireBaseConfig";
import { onAuthStateChanged, getAuth } from "firebase/auth";

export const AuthContext = React.createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        console.log(user.uid, "has logged in");
      } else {
        console.log("User has logged out");
      }
    });
  });

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
