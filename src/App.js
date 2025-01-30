import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mantine/core";
import { Footer } from "./Shared/Layout/Footer/Footer";
import { Home } from "./Views/Home/Home";
import AboutUs from "./Views/AboutUs/AboutUs";
import Users from "./Views/Users";
import Firme from "./Views/Firme/Firme";
import Header from "./Shared/Layout/Header/Header";

import Board from "./Components/Galery/Board/Board";
import Contact from "./Views/Contact/Contact";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/korisnici" element={<Users />} />
          <Route path="/firme" element={<Firme />} />
          <Route path="/galerija" element={<Board />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
