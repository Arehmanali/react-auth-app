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
  const [responseErrors, setResponseErrors] = useState("");
  const navigate = useNavigate();

  const logoutUser = async () => {
    setUser(null);
    window.localStorage.clear("user");
    let registerRequest;
    try {
      registerRequest = await axios.delete(
        `${config.SERVER_URL}/api/users/sign_out`
      );
    } catch ({ response }) {
      registerRequest = response;
    }
    if (registerRequest.status === 204) {
      navigate("/");
    }
  };

  const updateUser = async (data) => {
    setUser(data);
    window.localStorage.clear("user");
    window.localStorage.setItem("user", JSON.stringify({ ...data }));
  };

  const contextData = {
    user: user,
    responseErrors,
    updateUser: updateUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
