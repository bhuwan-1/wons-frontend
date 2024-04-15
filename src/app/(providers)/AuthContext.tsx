"use client";

import React, { ReactNode, createContext, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

const initialState = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSetIsLoggedIn = () => setIsLoggedIn(true); // Function to set isLoggedIn

  const value = { isLoggedIn, setIsLoggedIn: handleSetIsLoggedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
