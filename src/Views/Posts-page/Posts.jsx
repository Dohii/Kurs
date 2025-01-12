import supabaseClient from '../../api/axiosConfig';
import { useEffect, useState } from 'react';
import PostCard from '../../Components/PostCard/PostCard';
import { Flex } from '@mantine/core';
import classes from './Posts.module.css';

function Posts() {
  const [posts, setPosts] = useState();
  const fetchingPosts = async () => {
    try {
      const response = await supabaseClient.get('/posts');
      setPosts(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchingPosts();
  }, []);
  return (
    <Flex className={classes.wrapper}>
      {posts &&
        posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            creationDate={post.created_at}
          ></PostCard>
        ))}
    </Flex>
  );
}

export default Posts;
