import React, { useContext, useState } from "react";
import AuthContext from "./context/AuthContext.js";
import AuthLayout from "./components/layouts/AuthLayout";
import UserLayout from "./components/layouts/UserLayout";

const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useState(false);

  const Layout = isLoggedIn ? <UserLayout /> : <AuthLayout />;
  return <>{Layout}</>;
};

export default App;
