import { Group, Button } from '@mantine/core';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import ReactLogo from '../ReactLogo/ReactLogo';

function Header() {
  const navigate = useNavigate();
  return (
    <Group justify='center'>
      <ReactLogo />
      <Group gap='xl' mr='140' pt='20' pb='20' grow>
        <Button className={classes.solidBtn} onClick={() => navigate('/users')}>
          Users
        </Button>
        <Button className={classes.solidBtn} onClick={() => navigate('/posts')}>
          Posts
        </Button>
      </Group>
      <Group gap='sm'>
        <Button className={classes.borderBtn}>Registration</Button>
      </Group>
    </Group>
  );
}

export default Header;
