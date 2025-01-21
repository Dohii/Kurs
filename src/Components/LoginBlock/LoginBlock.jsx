import { Modal, Flex, Group, Button } from '@mantine/core';
import classes from './LoginBlock.module.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../common/AppContext';

function LoginBlock({ open, setOpen }) {
  const {
    users,
    loggedIn,
    setLoggedIn,
    loggedInUserData,
    setLoggedInUserData,
  } = useAppContext();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  // const [user, setUser] = useState({
  //   username: null,
  //   password: null,
  // });
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = users.filter((usersList) => {
      return (
        usersList.username === usernameRef.current.value &&
        usersList.password === passwordRef.current.value
      );
    });
    if (result.length > 0) {
      setLoggedIn(true);
      setLoggedInUserData(result[0]);
      setOpen(false);
      navigate('/user-profile');
    } else {
      console.log('user does not exist');
      setError(true);
    }
  };
  console.log('test');
  return (
    <Modal opened={open} onClose={() => setOpen(false)} title='Login' centered>
      <form
        className={classes.loginForm}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Flex gap='10' mb='10'>
          <label style={{ width: '30%' }}>Username</label>
          <input type='text' name='username' ref={usernameRef} />
        </Flex>
        <Flex gap='10' mb='10'>
          <label style={{ width: '30%' }}>Password</label>
          <input type='password' name='password' ref={passwordRef} />
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
