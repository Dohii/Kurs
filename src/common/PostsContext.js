import React, { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';
import supabaseClient from '../api/axiosConfig';

const postsContext = createContext(null);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await supabaseClient.get('/posts');
      setPosts(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <postsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </postsContext.Provider>
  );
};

export const usePostsContext = () => {
  const context = useContext(postsContext);
  if (!context) {
    throw new Error('use userContext only inside provider');
  }
  return context;
};
