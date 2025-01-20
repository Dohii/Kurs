import classes from './ProfilePage.module.css';
import { Flex, Stack, Group, Button } from '@mantine/core';
import { useAppContext } from '../../common/AppContext';
import Avatar from '../../Images/user.png';
import { useEffect, useState } from 'react';
import supabaseClient from '../../api/axiosConfig';

function UserPage() {
  const { loggedIn, loggedInUserData, posts } = useAppContext();
  const userEmail =
    `${loggedInUserData?.name}.${loggedInUserData?.last_name}@outlook.com`.toLowerCase();
  const loggedInUserPosts = posts?.filter((postsList) => {
    return postsList?.user_id === loggedInUserData?.id;
  });
  const [post, setPost] = useState({
    created_at: new Date(),
    title: null,
    description: null,
    image: 'https://picsum.photos/300/200',
    is_deleted: false,
    user_id: loggedInUserData.id,
  });
  const sendPost = async () => {
    try {
      // await supabaseClient.post('/posts', post);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setPost();
  }, []);
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
            </Stack>
            <Stack>
              <img className={classes.avatar} src={Avatar} alt='avatar-logo' />
            </Stack>
          </Group>
          <Stack>
            <h3 className={classes.subtitle}>
              You are author of {loggedInUserPosts.length} posts:
            </h3>
            <Flex>
              <label>Post title</label>
              <input
                type='text'
                name='title'
                onChange={(e) => {
                  setPost((prevValue) => {
                    return { ...prevValue, title: e.target.value };
                  });
                }}
              />
            </Flex>
            <Flex>
              <label>Post title</label>
              <input
                type='text'
                name='title'
                onChange={(e) => {
                  setPost((prevValue) => {
                    return { ...prevValue, title: e.target.value };
                  });
                }}
              />
            </Flex>
            <Button onClick={sendPost}>Click</Button>
          </Stack>
        </Stack>
      ) : (
        <h1 className={classes.notLoggedInMsg}>You are not logged in!</h1>
      )}
    </Flex>
  );
}

export default UserPage;
