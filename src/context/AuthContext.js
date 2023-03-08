import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const localStrUser = window.localStorage.getItem("user");
  let localStorageUser;
  if (localStrUser !== "undefined") {
    localStorageUser =
      typeof window !== "undefined" ? JSON.parse(localStrUser) : null;
  }
  const [user, setUser] = useState(localStorageUser ? localStorageUser : {});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [responseErrors, setResponseErrors] = useState("");

  const logoutUser = async () => {
    setUser(null);
    setIsLoggedIn(false);
    window.localStorage.clear("user");
  };

  const updateUser = async (data) => {
    setUser(data);
    window.localStorage.clear("user");
    window.localStorage.setItem("user", JSON.stringify({ ...data }));
    setIsLoggedIn(true);
  };

  const contextData = {
    user: user,
    isLoggedIn,
    responseErrors,
    updateUser: updateUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
