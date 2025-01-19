import UserCard from '../../Components/UserCard/UserCard';
import { Flex } from '@mantine/core';
import classes from './Users.module.css';
import { useUsersContext } from '../../common/UsersContext';
// import { useSupabase } from '../../common/AppContext';

function Users() {
  const { users } = useUsersContext();
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
              id={user.id}
            ></UserCard>
          </div>
        ))}
    </Flex>
  );
}

export default Users;
