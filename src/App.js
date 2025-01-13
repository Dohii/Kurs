import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./Views/Posts";
import Users from "./Views/Users";
import { useEffect, useState } from "react";
import supabaseClient from "./api/axiosConfig";
import { Container } from "@mantine/core";

function App() {
  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    try {
      const { data } = await supabaseClient.get("/users");
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container fluid>
      <BrowserRouter>
        <Header users={users} fetchUsers={fetchUsers} />
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route
            path="/users"
            element={<Users users={users} fetchUsers={fetchUsers} />}
          />
          <Route
            path="/"
            element={<Users users={users} fetchUsers={fetchUsers} />}
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
