import React, { createContext, useContext, useEffect, useState } from "react";
import supabaseClient from "../api/axiosConfig";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await supabaseClient.get("/users");
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const createUser = async (user) => {
    if (user.name && user.last_name && user.username && user.password) {
      try {
        await supabaseClient.post("/users", user);
        fetchUsers();
      } catch (error) {
        console.error("Error saving user:", error);
      }
    }
  };

  const deleteUser = async (userID) => {
    try {
      await supabaseClient.delete(`/users?id=eq.${userID}`);
      fetchUsers();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        supabaseClient,
        users,
        loading,
        error,
        fetchUsers,
        createUser,
        deleteUser,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("No UserContext found");
  }
  return context;
};
