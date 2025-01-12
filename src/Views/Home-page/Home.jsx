import heroImage from '../../Images/react-logo.png';
import classes from './Home.module.css';
import { Stack, Title, Group, Button, Text, Code } from '@mantine/core';
import FunctionCode from '../../Components/HTMLCodeElement/FunctionCode';
function Home() {
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <Stack align='center' justify='center' gap='md' mt='100' mb='100'>
            <img
              src={heroImage}
              className={classes.heroImage}
              alt='hero-image'
            />
            <Title order={1} fz='50' mb='0'>
              React
            </Title>
            <Title fz='30' fw='400'>
              The library for web and native user interfaces
            </Title>
            <Group justify='center' gap='sm'>
              <Button className={classes.solidBtn}>Learn React</Button>
              <Button className={classes.borderBtn}>API Reference</Button>
            </Group>
          </Stack>
          <Stack align='center' pt='100' pb='100' bg='rgb(19, 19, 20)' w='100%'>
            <Title w='500' fw='500' fz='42' lh='1'>
              Create user interfaces from components
            </Title>
            <Text w='800' fz='20' lh='1.3' fw='400' m='0' p='0'>
              React lets you build user interfaces out of individual pieces
              called components.
            </Text>
            <Text w='800' fz='20' lh='1' fw='400' m='0' p='0'>
              Create your own React components like
              <Code fz='20' bg='rgb(64, 71, 86)' c='white' ml='5'>
                Thumbnail
              </Code>
              ,{' '}
              <Code fz='20' bg='rgb(64, 71, 86)' c='white' ml='5'>
                LikeButton
              </Code>
              , and{' '}
              <Code fz='20' bg='rgb(64, 71, 86)' c='white' ml='5'>
                Video
              </Code>
              .
            </Text>
            <Text w='800' fz='20' lh='1.3' fw='400' m='0' p='0'>
              Then combine them into entire screens, pages, and apps.
            </Text>
            <Group>
              <Stack>
                <Text>Video.js</Text>
                <FunctionCode />
              </Stack>
            </Group>
          </Stack>
        </header>
      </div>
    </>
  );
}

export default Home;
