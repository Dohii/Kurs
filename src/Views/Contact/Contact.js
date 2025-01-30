
import { Container } from "@mantine/core";
// @ts-ignore
import TeamList from "../../Components/TeamList/TeamList";
// @ts-ignore
import FAQ from "../../Components/FAQ/FAQ";
// @ts-ignore
import ContactForm from "../../Components/Contact/ContactForm.tsx";
// @ts-ignore
import { MessageProvider } from "../../Components/Contact/MessageContext.tsx";

function Contact() {
  return (
    <MessageProvider>
      <Container fluid>
        <Container mt={20} fluid>
          <ContactForm />
        </Container>
        <Container mt={20} fluid>
         
        </Container>
        <Container mt={20} fluid>
         
        </Container>
      </Container>
    </MessageProvider>
  );
}

export default Contact;