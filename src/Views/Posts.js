import { useEffect, useState } from "react";
import supabaseClient from "../api/axiosConfig";
import PostCard from "../Components/PostCard/PostCard";
import { Container, Grid } from "@mantine/core";

function Posts() {
  const [posts, setPosts] = useState();

  const fetchPosts = async () => {
    try {
      const { data } = await supabaseClient.get("/posts");
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container m={30} fluid>
      <Grid>
        {posts &&
          // @ts-ignore
          posts.map((post, index) => (
            <Grid.Col span={3} key={`post_${index}`}>
              <PostCard post={post} />
            </Grid.Col>
          ))}
      </Grid>
    </Container>
  );
}

export default Posts;
