import { Card, Text, Flex, Indicator, Button } from '@mantine/core';
import classes from './UserCard.module.css';
import supabaseClient from '../../api/axiosConfig';

function UserCard({
  name,
  lastName,
  username,
  activityStatus,
  processing,
  id,
  fetchUsers,
}) {
  const lastNameInital =
    lastName.slice(0, 1) === ' ' ? lastName.slice(1, 2) : lastName.slice(0, 1);
  const initials = name.slice(0, 1) + lastNameInital;
  const randomColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;

  const handleDelete = async () => {
    try {
      const response = await supabaseClient.delete(`/users/id=${Number(id)}`);
      console.log(response);
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
    console.log(id.toString());
  };

  return (
    <Card
      shadow='sm'
      p='50'
      component='a'
      w='500'
      bd='1px solid rgba(94, 94, 94, 0.08)'
    >
      <Flex direction='row' gap='20'>
        <h2
          className={classes.avatar}
          style={{ borderColor: randomColor, color: randomColor }}
        >
          {initials}
        </h2>
        <Flex direction='column' justify='center' ml='20'>
          <Text fw={700} fz='22'>
            {name + lastName}
          </Text>
          <Text fz='18' c='dimmed'>
            Username: {username}
          </Text>
          <Indicator
            className={classes.activityStatus}
            color={!activityStatus ? 'red' : 'green'}
            position='middle-end'
            processing={processing}
          >
            <Text>Activity status</Text>
          </Indicator>
          <Button
            mt='10'
            bg='white'
            c='red'
            p='0'
            w='100'
            style={{ border: '1px solid red' }}
            onClick={(e) => {
              handleDelete();
            }}
          >
            Delete user
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}

export default UserCard;
