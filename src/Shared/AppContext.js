import React, { createContext, useContext, useEffect, useState } from 'react';
import supabaseClient from '../api/axiosConfig';
import { useAboutUsContext } from "./AboutUsContext";

const supabaseContext = createContext(null);

export const SupabaseProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const [posts, setPosts] = useState([]);

  const [firme, setFirme] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [nekiPodatak, setNekiPodatak] = useState('2');

  const { FAQData, team } = useAboutUsContext();

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await supabaseClient.get('/users');
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await supabaseClient.get('/posts');
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFirme = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await supabaseClient.get('/firme');
      setFirme(data);
    } catch (error) {
      console.error('Error fetching firme:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
    fetchPosts();
    fetchFirme();
  }, []);

  return (
    <supabaseContext.Provider
      value={{
        supabaseClient,
        users,
        posts,
        firme,
        loading,
        error,
        fetchUsers,
        fetchPosts,
        fetchFirme,
        nekiPodatak,
        setNekiPodatak,
        FAQData,
        team,
      }}
    >
      {children}
    </supabaseContext.Provider>
  );
};
export const useSupabase = () => {
  const context = useContext(supabaseContext);
  if (!context) {
    throw new Error('koristi supabase samo unutar supabase providera');
  }
  return context;
};
