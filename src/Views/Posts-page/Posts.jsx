import PostCard from '../../Components/PostCard/PostCard';
import { Flex } from '@mantine/core';
import classes from './Posts.module.css';
import { usePostsContext } from '../../common/PostsContext';
// import { useSupabase } from '../../common/AppContext';

function Posts() {
  const { posts } = usePostsContext();

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
