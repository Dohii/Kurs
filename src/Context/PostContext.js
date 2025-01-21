import React, { createContext, useContext, useEffect, useState } from "react";
import supabaseClient from "../api/axiosConfig";

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const [activeFilters, setActiveFilters] = useState({ author: null }); // staviti objekat, da mogu nekad dodati druge filtere
  const [activeSort, setActiveSort] = useState("titleAsc");
  const [searchText, setSearchText] = useState("");

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
    fetchPosts();
  }, []);

  const createPost = async (post) => {
    if (post.user_id && post.title && post.description) {
      try {
        await supabaseClient.post("/posts", post);
        fetchPosts();
      } catch (error) {
        console.error("Error saving post:", error);
      }
    }
  };

  const deletePost = async (postID) => {
    try {
      await supabaseClient.delete(`/posts?id=eq.${postID}`);
      fetchPosts();
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        supabaseClient,
        posts,
        loading,
        error,
        fetchPosts,
        createPost,
        deletePost,
        activeFilters,
        setActiveFilters,
        activeSort,
        setActiveSort,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("No PostContext found");
  }
  return context;
};
