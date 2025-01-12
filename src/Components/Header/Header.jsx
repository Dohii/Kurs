import { Group, Button, Modal, Flex } from '@mantine/core';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import ReactLogo from '../ReactLogo/ReactLogo';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState, useId } from 'react';
import supabaseClient from '../../api/axiosConfig';

function Header() {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const userId = useId();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = async () => {
  //   // console.log('Name: ' + name);
  //   // console.log('Last name: ' + lastName);
  //   // console.log('Username: ' + username);
  //   // console.log('Password: ' + password);
  //   // console.log('User ID: ' + userId);
  //   await supabaseClient.post(`/posts/${userId}`);
  //   const
  // };

  return (
    <>
      <Group justify='center' shadow='sm'>
        <ReactLogo />
        <Group gap='xl' mr='140' pt='20' pb='20' grow>
          <Button
            className={classes.solidBtn}
            onClick={() => navigate('/users')}
          >
            Users
          </Button>
          <Button
            className={classes.solidBtn}
            onClick={() => navigate('/posts')}
          >
            Posts
          </Button>
        </Group>
        <Group gap='sm'>
          <Button className={classes.borderBtn} onClick={open}>
            Registration
          </Button>
        </Group>
      </Group>
      <Modal opened={opened} onClose={close} title='Registration' centered>
        <form>
          <Flex gap='10' mb='10'>
            <label style={{ width: '30%' }}>Name</label>
            <input
              type='text'
              name='ime'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Flex>
          <Flex gap='10' mb='10'>
            <label style={{ width: '30%' }}>Last name</label>
            <input
              type='text'
              name='prezime'
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Flex>
          <Flex gap='10' mb='10'>
            <label style={{ width: '30%' }}>Username</label>
            <input
              type='text'
              name='username'
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Flex>
          <Flex gap='10' mb='10'>
            <label style={{ width: '30%' }}>Password</label>
            <input
              type='password'
              name='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Flex>
          <Group justify='center' mt='10'>
            <Button
              className={classes.solidBtn}
              // type='submit'
              // onClick={handleSubmit}
            >
              Register user
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
}

export default Header;
