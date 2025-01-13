import UserCard from '../../Components/UserCard/UserCard';
import { Flex } from '@mantine/core';
import classes from './Users.module.css';

function Users({ users, fetchUsers }) {
  return (
    <Flex className={classes.wrapper}>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <UserCard
              name={user.name}
              lastName={user.last_name}
              username={user.username}
              activityStatus={user.is_active}
              processing={user.is_active}
              fetchUsers={fetchUsers}
              id={user.id}
            ></UserCard>
          </div>
        ))}
    </Flex>
  );
}

export default Users;
