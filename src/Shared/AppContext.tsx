import React, { createContext, useContext, useEffect, useState } from "react";
import supabaseClient from "../api/axiosConfig";

const supabaseContext = createContext(null);

export const SupabaseProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [nekiPodatak, setNekiPodatak] = useState("2");

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

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await supabaseClient.get("/posts");
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  return (
    <supabaseContext.Provider
      value={{
        supabaseClient,
        users,
        posts,
        loading,
        error,
        fetchUsers,
        fetchPosts,
        nekiPodatak,
        setNekiPodatak,
      }}
    >
      {children}
    </supabaseContext.Provider>
  );
};
export const useSupabase = () => {
  const context = useContext(supabaseContext);
  if (!context) {
    throw new Error("koristi supabase samo unutar supabase providera");
  }
  return context;
};
