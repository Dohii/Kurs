import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import classes from './Footer.module.css';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    title: 'Kategorije',
    links: [
      { label: "Kompanije", link: "/firme" },
      { label: "Korisnici", link: "/users" },
      { label: "Postovi", link: "#" },
      { label: "Sta ja znam", link: "#" },
    ],
  },
];

export function Footer() {
  const navigate = useNavigate();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component='a'
        href={link.link}
        onClick={(event) => {
          event.preventDefault();
          navigate(`${link.link}`);
        }}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size='xs' c='dimmed' className={classes.description}>
            Glasajte za nas, glasajte za nas. Da smo na vašem mjestu i mi bi
            glasali za nas. Jer ako niste glasali za nas niste glasali za spas.
            Glasajte za nas, glasajte za nas.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c='dimmed' size='sm'>
          © 2025 kursadjije.dev. Sva prava su prava.
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify='flex-end'
          wrap='nowrap'
        >
          <ActionIcon size='lg' color='gray' variant='subtle'>
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg' color='gray' variant='subtle'>
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg' color='gray' variant='subtle'>
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
