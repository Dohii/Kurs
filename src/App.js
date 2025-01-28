import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mantine/core";
import { Header } from "./Shared/Layout/Header/Header";
import { Footer } from "./Shared/Layout/Footer/Footer";
import { Home } from "./Views/Home/Home";
import  Users  from "./Views/Users";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
