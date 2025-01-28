import { Container } from "@mantine/core";
import TeamList from "../../Components/TeamList/TeamList";
import AboutUsTimeline from "../../Components/AboutUsTimeline/AboutUsTimeline";
import AboutUsDetails from "../../Components/AboutUsDetails/AboutUsDetails";
import FAQ from "../../Components/FAQ/FAQ";

function AboutUs() {
  return (
    <Container fluid>
      <AboutUsDetails />
      <Container mt={20} fluid>
        <AboutUsTimeline />
      </Container>
      <Container mt={20} fluid>
        <TeamList />
      </Container>
      <Container mt={20} fluid>
        <FAQ />
      </Container>
    </Container>
  );
}
export default AboutUs;
