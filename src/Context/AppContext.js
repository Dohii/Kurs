import React, { createContext, useContext, useState } from "react";
import { useUserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const { users } = useUserContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState();
  const navigate = useNavigate();

  function onLogin(username, password) {
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setIsLoggedIn(true);
      setLoggedUser(foundUser);
      navigate("/user");
    } else {
      alert("Invalid username or password");
    }
  }

  function onLogOut() {
    setIsLoggedIn(false);
    setLoggedUser(null);
    navigate("/");
  }

  return (
    <AppContext.Provider
      value={{
        onLogin,
        isLoggedIn,
        onLogOut,
        loggedUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("No AppContext found");
  }
  return context;
};
