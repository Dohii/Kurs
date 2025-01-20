import { Group, Button } from '@mantine/core';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import ReactLogo from '../ReactLogo/ReactLogo';
import { useState } from 'react';
import RegistrationBlock from '../RegistrationBlock/RegistrationBlock';
import LoginBlock from '../LoginBlock/LoginBlock';
import { useAppContext } from '../../common/AppContext';

function Header({ users, fetchUsers }) {
  const { loggedIn, setLoggedIn, loggedInUserData, setLoggedInUserData } =
    useAppContext();
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
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
        {loggedIn && loggedIn ? (
          <Button
            className={classes.borderBtn}
            onClick={() => {
              navigate('/user-profile');
            }}
          >
            {loggedInUserData.username}
          </Button>
        ) : (
          <Group gap='sm'>
            <Button
              className={classes.borderBtn}
              onClick={() => setRegistrationOpen(true)}
            >
              Registration
            </Button>
            <Button
              className={classes.solidBtn}
              onClick={() => setLoginOpen(true)}
            >
              Login
            </Button>
          </Group>
        )}
      </Group>
      <RegistrationBlock
        open={registartionOpen}
        setOpen={setRegistrationOpen}
        fetchUsers={fetchUsers}
      />
      <LoginBlock open={loginOpen} setOpen={setLoginOpen} />
    </>
  );
}

export default Header;
