import { Container } from "@mantine/core";

import ContactForm from "../../Components/Contact/ContactForm";

import { MessageProvider } from "../../Components/Contact/MessageContext";

function Contact() {
  return (
    <MessageProvider>
      <Container fluid>
        <Container mt={20} fluid>
          <ContactForm />
        </Container>
        <Container mt={20} fluid></Container>
        <Container mt={20} fluid></Container>
      </Container>
    </MessageProvider>
  );
}

export default Contact;
