import { Title, Text, Container, List, Paper, Button } from "@mantine/core";

function AboutUsDetails() {
  return (
    <Container fluid>
      <Title style={{ textAlign: "center" }} order={1}>
        React Kurs - Academy387
      </Title>
      <Paper p={30} shadow="xs" style={{ marginBottom: 20 }}>
        <Text style={{ textAlign: "center" }}>
          Savladajte osnove rada u jednom od najpopularnijih JavaScript
          frameworka današnjice!
        </Text>
        <Text>
          Ovaj kurs je namijenjen osobama koje poznaju osnove programiranja i
          koje žele naučiti da rade sa jednim od najpopularnijih JavaScript
          frameworka današnjice. U toku kursa, polaznici će savladati osnove
          React-a, te će raditi na razvoju projekta od početka do kraja, tako da
          će stečeno znanje odmah primjenjivati i u praksi.
        </Text>
      </Paper>
      <Title order={2} style={{ marginTop: 10 }}>
        Šta ćete naučiti?
      </Title>
      <List>
        <List.Item>
          Intro in React, React components, Simple components, JSX
        </List.Item>
        <List.Item>
          Setup project, Components communication, Styles to the component,
          Understanding state and unidirectional data flow
        </List.Item>
        <List.Item>Class/functional components - Lifecycle/hooks</List.Item>
        <List.Item>
          React Router, state management tools (Redux, MobX, etc.)
        </List.Item>
        <List.Item>
          Component composition, prop-drill components, React Context
        </List.Item>
        <List.Item>Unit test and deploy</List.Item>
      </List>

      <Title order={2} style={{ marginTop: 10 }}>
        Detalji Kursa
      </Title>
      <Text>Kurs traje 6 sedmica i sastoji se od:</Text>
      <List>
        <List.Item>Teorijski deo (predavanja i materijali)</List.Item>
        <List.Item>Praktične vežbe i projekti</List.Item>
        <List.Item>Podrška instruktora i mentoring</List.Item>
      </List>
      <Title order={2} style={{ marginTop: 10 }}>
        Cijena i Registracija
      </Title>
      <Text>
        Cijena kursa je 399KM, kurs se održava utorkom i četvrtkom, u terminu od
        17:30 do 19:30h.
      </Text>

      <Title
        order={2}
        style={{ color: "#048dd6", marginTop: 10, marginBottom: 10 }}
      >
        Prijavite se sada!
      </Title>
    </Container>
  );
}
export default AboutUsDetails;
