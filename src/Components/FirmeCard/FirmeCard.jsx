import { Card, Image, Text, Modal, Button, Group, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './FirmeCard.module.css';

function FirmeCard({ firmaData }) {
  const { broj_uposlenika, created_at, naziv, opis, slika } = firmaData;
  const [opened, { open, close }] = useDisclosure(false);

  const dateFormatted = new Date(created_at).toDateString();
  return (
    <>
      <Card shadow='sm' padding='xl' component='a'>
        <Card.Section className={classes.image} h='160'>
          <Image src={slika} h='100%' alt='No way!' />
        </Card.Section>

        <Text fw={500} size='lg' mt='md'>
          {naziv}
        </Text>

        <Button onClick={open}>Više detalja</Button>
      </Card>
      <Modal opened={opened} onClose={close}>
        <Card>
          <Card.Section className={classes.image} h='160'>
            <Image src={slika} h='100%' alt='No way!' />
          </Card.Section>
          <Group>
            <Text size='lg'>
              <strong>Ime firme: </strong>
            </Text>
            <Text size='lg'>{naziv}</Text>
          </Group>
          <Flex direction='column'>
            <Text size='lg'>
              <strong>Opis poslovanja: </strong>
            </Text>
            <Text size='lg'>{opis}</Text>
          </Flex>
          <Group>
            <Text size='lg'>
              <strong>Broj uposlenika: </strong>
            </Text>
            <Text size='lg'>{broj_uposlenika}</Text>
          </Group>
          <Group>
            <Text size='lg'>
              <strong>Datum otvaranja: </strong>
            </Text>
            <Text size='lg'>{dateFormatted}</Text>
          </Group>
        </Card>
      </Modal>
    </>
  );
}

export default FirmeCard;
