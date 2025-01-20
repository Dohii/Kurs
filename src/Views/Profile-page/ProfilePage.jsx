import classes from './ProfilePage.module.css';
import { Flex, Stack, Group, Button, Select } from '@mantine/core';
import { useAppContext } from '../../common/AppContext';
import Avatar from '../../Images/user.png';
import { useState } from 'react';
import supabaseClient from '../../api/axiosConfig';
import UserPostsList from '../../Components/UserPostsList/UserPostsList';

function UserPage() {
  const { loggedIn, loggedInUserData, posts, fetchPosts, users } =
    useAppContext();
  const userEmail =
    `${loggedInUserData?.name}.${loggedInUserData?.last_name}@outlook.com`.toLowerCase();
  const loggedInUserPosts = posts?.filter((postsList) => {
    return postsList?.user_id === loggedInUserData?.id;
  });
  console.log(loggedInUserPosts);

  const [post, setPost] = useState({
    created_at: new Date(),
    title: null,
    description: null,
    image: 'https://picsum.photos/300/200',
    is_deleted: false,
    user_id: null,
  });

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      await supabaseClient.post('/posts', post);
      fetchPosts();
      setPost({
        created_at: new Date(),
        title: null,
        description: null,
        image: 'https://picsum.photos/300/200',
        is_deleted: false,
        user_id: null,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex className={classes.wrapper}>
      {loggedIn && loggedIn ? (
        <Stack>
          <Group>
            <Stack>
              <h2 className={classes.username}>
                Welcome: &nbsp;<span>{loggedInUserData.username}</span>
              </h2>
              <h3 className={classes.subtitle}>
                First name: &nbsp;<span>{loggedInUserData.name}</span>
              </h3>
              <h3 className={classes.subtitle}>
                Last name: &nbsp;<span>{loggedInUserData.last_name}</span>
              </h3>
              <h3 className={classes.subtitle}>
                E-mail address: &nbsp;<span>{userEmail}</span>
              </h3>
              <h3 className={classes.subtitle}>
                You are author of {loggedInUserPosts.length} posts.
              </h3>
              <UserPostsList posts={loggedInUserPosts} />
            </Stack>
            <Stack>
              <img className={classes.avatar} src={Avatar} alt='avatar-logo' />
            </Stack>
          </Group>
          <Stack mt='50'>
            <form
              onSubmit={(e) => {
                sendPost(e);
              }}
            >
              <Flex direction='column'>
                <label className={classes.inputLabel}>Post title</label>
                <input
                  type='text'
                  name='title'
                  onChange={(e) => {
                    setPost((prevValues) => {
                      return {
                        ...prevValues,
                        title: e.target.value,
                      };
                    });
                  }}
                />
              </Flex>
              <Flex direction='column'>
                <label className={classes.inputLabel}>Post description</label>
                <textarea
                  name='description'
                  rows='4'
                  cols='50'
                  onChange={(e) => {
                    setPost((prevValues) => {
                      return {
                        ...prevValues,
                        description: e.target.value,
                      };
                    });
                  }}
                />
              </Flex>
              <Flex direction='column'>
                <label className={classes.inputLabel}>Select post author</label>
                <Select
                  data={users?.map((user) => ({
                    label: user.username,
                    value: String(user.id),
                  }))}
                  placeholder='select author'
                  onChange={(value) => {
                    setPost((prevValues) => {
                      return {
                        ...prevValues,
                        user_id: value,
                      };
                    });
                  }}
                />
              </Flex>
              <Button mt='30' className={classes.submitBtn} type='submit'>
                Submit post
              </Button>
            </form>
          </Stack>
        </Stack>
      ) : (
        <h1 className={classes.notLoggedInMsg}>You are not logged in!</h1>
      )}
    </Flex>
  );
}

export default UserPage;
