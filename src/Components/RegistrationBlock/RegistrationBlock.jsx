import { Group, Button, Modal, Flex } from '@mantine/core';
import supabaseClient from '../../api/axiosConfig';
import { useState } from 'react';
import classes from './RegistrationBlock.module.css';
import { useUsersContext } from '../../common/UsersContext';
// import { useSupabase } from '../../common/AppContext';

function RegistrationBlock({ open, setOpen }) {
  const { fetchUsers } = useUsersContext();
  const [user, setUser] = useState({
    is_active: null,
    name: null,
    last_name: null,
    username: null,
    password: null,
  });
  const handleSubmit = async () => {
    if (user.name && user.last_name && user.username && user.password) {
      try {
        await supabaseClient.post(`/users`, user);
        fetchUsers();
        setOpen(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Modal
      opened={open}
      onClose={() => setOpen(false)}
      title='Registration'
      centered
    >
      <form onSubmit={handleSubmit}>
        <Flex gap='10' mb='10'>
          <label style={{ width: '30%' }}>Name</label>
          <input
            type='text'
            name='ime'
            onChange={(e) => {
              setUser((prevValues) => {
                return {
                  ...prevValues,
                  name: e.target.value,
                };
              });
            }}
          />
        </Flex>
        <Flex gap='10' mb='10'>
          <label style={{ width: '30%' }}>Last name</label>
          <input
            type='text'
            name='prezime'
            onChange={(e) => {
              setUser((prevValues) => {
                return {
                  ...prevValues,
                  last_name: e.target.value,
                };
              });
            }}
          />
        </Flex>
        <Flex gap='10' mb='10'>
          <label style={{ width: '30%' }}>Username</label>
          <input
            type='text'
            name='username'
            onChange={(e) => {
              setUser((prevValues) => {
                return {
                  ...prevValues,
                  username: e.target.value,
                };
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
              setUser((prevValues) => {
                return {
                  ...prevValues,
                  password: e.target.value,
                };
              });
            }}
          />
        </Flex>
        <Group justify='center' mt='10'>
          <Button className={classes.solidBtn} type='submit'>
            Register user
          </Button>
        </Group>
      </form>
    </Modal>
  );
}

export default RegistrationBlock;
