import supabaseClient from '../../api/axiosConfig';
import { useEffect, useState } from 'react';
import PostCard from '../../Components/PostCard/PostCard';
import { Flex } from '@mantine/core';

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
    <Flex
      mih={50}
      bg='rgba(0, 0, 0, .3)'
      gap='lg'
      justify='flex-start'
      align='flex-start'
      direction='row'
      wrap='wrap'
    >
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
