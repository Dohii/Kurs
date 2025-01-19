import React, { createContext, useContext, useState } from 'react';
import supabaseClient from '../api/axiosConfig';
import { useUsersContext } from './UsersContext';
import { usePostsContext } from './PostsContext';

const appContext = createContext(null);

export const AppProvider = ({ children }) => {
  const { users, fetchUsers } = useUsersContext();
  const { posts, fetchPosts } = usePostsContext();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState();

  return (
    <appContext.Provider
      value={{
        supabaseClient,
        users,
        posts,
        fetchUsers,
        fetchPosts,
        loggedIn,
        setLoggedIn,
        loggedInUsername,
        setLoggedInUsername,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
export const useAppContext = () => {
  const context = useContext(appContext);
  if (!context) {
    throw new Error('koristi supabase samo unutar supabase providera');
  }
  return context;
};
