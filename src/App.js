import { Container } from "@mantine/core";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Posts from "./Views/Posts";
import Users from "./Views/Users";
import Login from "./Views/Login";
import Header from "./Components/Header/Header";
import User from "./Views/User";

function App() {
  return (
    <Container fluid>
      <Header />
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Container>
  );
}

export default App;
