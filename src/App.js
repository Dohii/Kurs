import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mantine/core";
import Board from "./Components/Galery/Board/Board";
import  Header  from "./Components/Galery/Header/Header";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<><Board /> <Board /></>} />
      </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
