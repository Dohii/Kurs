import { useEffect, useState } from 'react';
import supabaseClient from '../../api/axiosConfig';
import UserCard from '../../Components/UserCard/UserCard';
import { Flex, Group } from '@mantine/core';
import classes from './Users.module.css';

function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await supabaseClient.get('/users');
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <Flex className={classes.wrapper}>
      {users &&
        users.map((user) => (
          <div key={user.name}>
            <UserCard
              name={user.name}
              lastName={user.last_name}
              username={user.username}
              activityStatus={user.is_active}
              processing={user.is_active}
            ></UserCard>
          </div>
        ))}
    </Flex>
  );
}

export default Users;
