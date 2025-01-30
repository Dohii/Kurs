// @ts-nocheck
import React, { Suspense } from "react";
import {
  Container,
  TextInput,
  Textarea,
  Button,
  Title,
  Paper,
  Table,
  Box,
  Stack,
  SimpleGrid,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMessage } from "./MessageContext";
import Map from "./Map";

const MapComponent = () => (
  <Suspense
    fallback={
      <div
        style={{
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>Ucitavanje mape...</div>
      </div>
    }
  >
    <Map />
  </Suspense>
);
const ContactForm = () => {
  const { messages, addMessage } = useMessage();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => (value.trim().length === 0 ? "Name is required" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      subject: (value) =>
        value.trim().length === 0 ? "Subject is required" : null,
      message: (value) =>
        value.trim().length === 0 ? "Message is required" : null,
    },
  });

  const handleSubmit = async (values) => {
    try {
      addMessage({
        ...values,
        timestamp: new Date().toISOString(),
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container size="lg">
      <Box mb={50}>
        <Title order={1} ta="center" mb="xl">
          Kontaktirajte nas{" "}
        </Title>

        <div style={{ height: "400px", marginBottom: "2rem" }}>
          {<MapComponent />}
        </div>

        <Paper shadow="sm" radius="md" p="xl" withBorder>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <SimpleGrid cols={2} mb="md">
              <TextInput
                required
                label="Ime"
                placeholder="Vase ime"
                {...form.getInputProps("name")}
              />
              <TextInput
                required
                label="Email"
                placeholder="example@email.com"
                {...form.getInputProps("email")}
              />
            </SimpleGrid>

            <Stack>
              <TextInput
                required
                label="Predmet"
                placeholder="Predmet"
                {...form.getInputProps("subject")}
              />

              <Textarea
                required
                label="Poruka"
                placeholder="Poruka"
                minRows={4}
                {...form.getInputProps("message")}
              />

              <Button type="submit" fullWidth loading={form.submitting}>
                Send Message
              </Button>
            </Stack>
          </form>
        </Paper>

        <Box mt={50}>
          <Title order={2} ta="center" mb="lg">
            Poruke
          </Title>
          <Paper shadow="sm" radius="md" withBorder>
            {messages.length > 0 ? (
              <Table striped highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Ime</Table.Th>
                    <Table.Th>Email</Table.Th>
                    <Table.Th>Predmet</Table.Th>
                    <Table.Th>Poruka</Table.Th>
                    <Table.Th>Datum</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {messages.map((msg, index) => (
                    <Table.Tr key={index}>
                      <Table.Td>{msg.name}</Table.Td>
                      <Table.Td>{msg.email}</Table.Td>
                      <Table.Td>{msg.subject}</Table.Td>
                      <Table.Td>{msg.message}</Table.Td>
                      <Table.Td>
                        {msg.timestamp &&
                          new Date(msg.timestamp).toLocaleDateString()}
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            ) : (
              <Box p="xl" ta="center">
                <div>Nema poruka </div>
              </Box>
            )}
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
