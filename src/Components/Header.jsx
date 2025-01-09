import { Group, Button } from '@mantine/core';
import classes from './Header.module.css';

function Header() {
  return (
    <Group justify='center'>
      <Group gap='xl' mr='140' pt='20' pb='20' grow>
        <Button className={classes.solidBtn}>Users</Button>
        <Button className={classes.solidBtn}>Posts</Button>
      </Group>
      <Group gap='sm'>
        <Button className={classes.borderBtn}>Registration</Button>
      </Group>
    </Group>
  );
}

export default Header;
