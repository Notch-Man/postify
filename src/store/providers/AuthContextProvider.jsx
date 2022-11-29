import React, { useEffect, useState } from "react";

import { AuthContext } from "..";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";
import AuthSpinner from "../../components/UI/AuthSpinner";

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const login = (user) => {
    setCurrentUser(user);
  };

  const logout = (user) => {
    setCurrentUser(null);
  };

  if (loading) {
    return <AuthSpinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
