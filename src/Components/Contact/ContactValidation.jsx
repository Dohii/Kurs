import React from 'react';
import { Container, TextInput, Textarea, Button, Title, Paper, Table } from '@mantine/core';
import { useForm } from '@mantine/form';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useMessage } from './MessageContext';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const { messages, addMessage } = useMessage();
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length === 0 ? 'Upisite ime' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Upisite email'),
      subject: (value) => value.trim().length === 0 ? 'Upisite predmet' : null,
      message: (value) => value.trim().length === 0 ? 'Upisite poruku' : null,
    },
  });

  const handleSubmit = (values) => {
    addMessage(values);
    form.reset();
    alert('Poruka poslana');
  };

  return (
    <Container>
      <Title order={1} mb="lg">Kontaktirajte nas</Title>
      
      <Paper p="md" mb="xl">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Name"
            placeholder="Ime"
            {...form.getInputProps('name')}
            mb="md"
          />
          <TextInput
            label="Email"
            placeholder="example@email.com"
            {...form.getInputProps('email')}
            mb="md"
          />
          <TextInput
            label="Subject"
            placeholder="Predmet"
            {...form.getInputProps('subject')}
            mb="md"
          />
          <Textarea
            label="Message"
            placeholder="Poruka"
            {...form.getInputProps('message')}
            mb="md"
          />
          <Button type="submit">Posalji poruku</Button>
        </form>
      </Paper>

      <div style={{ height: '400px', marginBottom: '2rem' }}>
        <MapContainer
          center={[43.8563, 18.4131]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[43.8563, 18.4131]} />
        </MapContainer>
      </div>

      <Title order={2} mb="md">Poruke</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Ime</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Predmet</Table.Th>
            <Table.Th>Poruka</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {messages.map((msg, index) => (
            <Table.Tr key={index}>
              <Table.Td>{msg.name}</Table.Td>
              <Table.Td>{msg.email}</Table.Td>
              <Table.Td>{msg.subject}</Table.Td>
              <Table.Td>{msg.message}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Container>
  );
};

export default Contact;