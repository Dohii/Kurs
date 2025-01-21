import PostCard from '../../Components/PostCard/PostCard';
import { Flex, Group, MultiSelect, Select } from '@mantine/core';
import classes from './Posts.module.css';
import { usePostsContext } from '../../common/PostsContext';
import { useUsersContext } from '../../common/UsersContext';
import { useState, useEffect } from 'react';

function Posts() {
  const { posts } = usePostsContext();
  const { users } = useUsersContext();
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [sortState, setSortState] = useState();
  const [postToDisplay, setPostsToDisplay] = useState(posts || []);

  const handleSort = (filteredPosts) => {
    return filteredPosts.sort((a, b) => {
      if (sortState === 'titleAscending') {
        return a.title.localeCompare(b.title);
      } else if (sortState === 'titleDescending') {
        return b.title.localeCompare(a.title);
      } else if (sortState === 'createDateAscending') {
        return new Date(a.created_at) - new Date(b.created_at);
      } else if (sortState === 'createDateDescending') {
        return new Date(b.created_at) - new Date(a.created_at);
      }
      return 0;
    });
  };

  const filterPostsByAuthor = () => {
    if (selectedAuthors.length === 0) {
      return [...posts];
    }
    return posts?.filter((post) =>
      selectedAuthors.some((author) => author.user_id === post.user_id)
    );
  };

  useEffect(() => {
    const filteredPosts = filterPostsByAuthor();
    const sortedPosts = handleSort(filteredPosts);
    setPostsToDisplay(sortedPosts);
  }, [selectedAuthors, sortState]);

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
        <Select
          miw='300'
          label='Sort by:'
          data={[
            {
              label: `title ascending`,
              value: 'titleAscending',
            },
            {
              label: `title descending`,
              value: 'titleDescending',
            },
            {
              label: `create date ascending`,
              value: 'createDateAscending',
            },
            {
              label: `create date descending`,
              value: 'createDateDescending',
            },
          ]}
          onChange={(e) => {
            setSortState(e);
          }}
        />
      </Group>
      <Flex wrap='wrap' gap='30'>
        {(postToDisplay?.length ? postToDisplay : posts).map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            creationDate={post.created_at}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default Posts;
