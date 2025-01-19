import { Modal, Flex, Group, Button } from '@mantine/core';
import classes from './LoginBlock.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../common/AppContext';

function LoginBlock({ open, setOpen }) {
  const {
    users,
    loggedIn,
    setLoggedIn,
    loggedInUsername,
    setLoggedInUsername,
  } = useAppContext();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    username: null,
    password: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = users.filter((usersList) => {
      return (
        usersList.username === user.username &&
        usersList.password === user.password
      );
    });
    if (result.length > 0) {
      setLoggedIn(true);
      setLoggedInUsername(user.username);
      setOpen(false);
      navigate('/user-profile');
    } else {
      console.log('user does not exist');
      setError(true);
    }
  };
  return (
    <Modal opened={open} onClose={() => setOpen(false)} title='Login' centered>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Flex gap='10' mb='10'>
          <label style={{ width: '30%' }}>Username</label>
          <input
            type='text'
            name='username'
            onChange={(e) => {
              setUser((prevUser) => {
                return { ...prevUser, username: e.target.value };
              });
            }}
          />
        </Flex>
        <Flex gap='10' mb='10'>
          <label style={{ width: '30%' }}>Password</label>
          <input
            type='password'
            name='password'
            onChange={(e) => {
              setUser((prevUser) => {
                return { ...prevUser, password: e.target.value };
              });
            }}
          />
        </Flex>
        {error && (
          <Flex gap='10' mb='10'>
            <p>Login username or password is not correct! Try again!</p>
          </Flex>
        )}
        <Group justify='center' mt='10'>
          <Button className={classes.solidBtn} type='submit'>
            Log in
          </Button>
        </Group>
      </form>
    </Modal>
  );
}

export default LoginBlock;
