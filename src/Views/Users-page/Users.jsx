import { useEffect, useState } from 'react';
import supabaseClient from '../../api/axiosConfig';
import UserCard from '../../Components/UserCard/UserCard';
import { Flex } from '@mantine/core';

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
    <Flex
      mih={50}
      bg='rgba(0, 0, 0, 0)'
      gap='md'
      justify='flex-start'
      align='flex-start'
      direction='row'
      wrap='wrap'
      ml='30'
    >
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
