import { useEffect, useState } from "react";
import supabaseClient from "../api/axiosConfig";
import PostCard from "../Components/PostCard/PostCard";
import { Container, Grid } from "@mantine/core";
import { useSupabase } from "../Shared/AppContext";

function Posts() {
  const { users, posts, loading, error } = useSupabase();
  console.log(posts);

  return (
    <Container m={30} fluid>
      <Grid>
        {posts &&
          // @ts-ignore
          posts.map((post, index) => (
            <Grid.Col span={3} key={`post_${index}`}>
              <PostCard />
            </Grid.Col>
          ))}
      </Grid>
    </Container>
  );
}

export default Posts;
