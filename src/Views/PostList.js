import React from "react";
import { useEffect, useState } from "react";
import supabaseClient from "../api/axiosConfig";
import { Container, Grid, TextInput, Button, Text, Image } from "@mantine/core";
import AppHeader from "../Shared/Header";
import { Link } from "react-router-dom";

function PostList() {
    const [posts, setPosts] = useState();

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const { data } = await supabaseClient.get("/posts");
          setPosts(data);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };

      fetchUsers();
    }, []);

    return (
      <div className="App">
        <header className="App-header">
          {posts &&
            posts.map((post) => (
              <div>
                <p>Title: {post?.title}</p>
                <p>Description : {post?.description}</p>
                <p>Created at : {post?.created_at}</p>
                <p>
                  Image:
                  <Image src={post?.image} height={160} width={200} />
                </p>
              </div>
            ))}
        </header>
      </div>
    );     
}

export default PostList;
