import { Group, Button } from '@mantine/core';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import ReactLogo from '../ReactLogo/ReactLogo';
import { useState } from 'react';
import RegistrationBlock from '../RegistrationBlock/RegistrationBlock';

function Header({ users, fetchUsers }) {
  const navigate = useNavigate();
  const [registartionOpen, setRegistrationOpen] = useState(false);

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
          <Button
            className={classes.borderBtn}
            onClick={() => setRegistrationOpen(true)}
          >
            Registration
          </Button>
        </Group>
      </Group>
      <RegistrationBlock
        open={registartionOpen}
        setOpen={setRegistrationOpen}
        nextId={users?.length ? users.length + 1 : 1}
        fetchUsers={fetchUsers}
      />
    </>
  );
}

export default Header;
