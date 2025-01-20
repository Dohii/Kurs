import PostCard from '../../Components/PostCard/PostCard';
import { Flex, Group, MultiSelect } from '@mantine/core';
import classes from './Posts.module.css';
import { usePostsContext } from '../../common/PostsContext';
import { useUsersContext } from '../../common/UsersContext';
import { useState } from 'react';

function Posts() {
  const { posts } = usePostsContext();
  const { users } = useUsersContext();
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const filteredPostsByAuthor = posts?.filter((post) => {
    return selectedAuthors.some((author) => author.user_id === post.user_id);
  });

  return (
    <Flex className={classes.wrapper}>
      <Group>
        <MultiSelect
          miw='300'
          clearable
          searchable
          label='Filter posts by author'
          placeholder='Select author'
          data={users?.map((value) => ({
            value: String(value.id),
            label: value.username,
          }))}
          onChange={(values) => {
            const selectedAuthorsArray = values.map((value) => ({
              user_id: Number(value),
              value: value,
            }));
            setSelectedAuthors(selectedAuthorsArray);
          }}
        />
      </Group>
      <Flex wrap='wrap' gap='30'>
        {filteredPostsByAuthor?.length > 0 && filteredPostsByAuthor
          ? filteredPostsByAuthor?.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                creationDate={post.created_at}
              ></PostCard>
            ))
          : posts?.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                creationDate={post.created_at}
              ></PostCard>
            ))}
      </Flex>
    </Flex>
  );
}

export default Posts;
