import React, { useContext } from "react";
import AuthContext from "./context/AuthContext.js";
import TopNavbar from "./components/navbars/TopNavbar.js";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login.js";
import Signup from "./pages/signup/Signup.js";
import Footer from "./components/footers/Footer.js";
import Home from "./pages/home/Home.js";

const App = () => {
  let { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      {isLoggedIn ? "" : <TopNavbar />}
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/" index element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {isLoggedIn ? "" : <Footer />}
    </>
  );
};

export default App;
