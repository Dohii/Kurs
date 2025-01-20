import { Card, Image, Text, Flex, Button, Group } from '@mantine/core';

function PostCard({ image, title, creationDate, description }) {
  const date = new Date(creationDate);
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}.${date.getFullYear().toString()} ${date
    .getHours()
    .toString()
    .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder w='300'>
      <Card.Section>
        <Image
          src={image && image ? image : 'https://picsum.photos/200/300'}
          height={160}
          alt='Norway'
        />
      </Card.Section>

      <Flex justify='space-between' mt='md' mb='xs' direction='column'>
        <Text fw={500} mb='0'>
          {title}
        </Text>
        <Text size='sm' fz='8'>
          {formattedDate}
        </Text>
      </Flex>

      <Text size='sm' c='dimmed' mih='50'>
        {description}
      </Text>

      <Button color='blue' mt='md' radius='md' ml='auto' mr='auto'>
        Read more{' '}
      </Button>
    </Card>
  );
}

export default PostCard;
