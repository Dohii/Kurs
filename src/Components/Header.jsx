import { Group, UnstyledButton } from '@mantine/core';
import classes from './Header.module.css';

function Header() {
  return (
    <Group justify='center'>
      <Group gap='xl' mr='140' pt='20' pb='20' grow>
        <UnstyledButton component='a' className={classes.solidBtn}>
          Users
        </UnstyledButton>
        <UnstyledButton className={classes.solidBtn}>Posts</UnstyledButton>
      </Group>
      <Group gap='sm'>
        <UnstyledButton className={classes.borderBtn}>
          Registration
        </UnstyledButton>
      </Group>
    </Group>
  );
}

export default Header;
