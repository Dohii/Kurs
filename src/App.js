import "./App.css";
import "@mantine/core/styles.css";
import React from "react";
import { useEffect, useState } from "react";
import supabaseClient from "./api/axiosConfig";
import {
  MantineProvider,
  AppShell,
  Header,
  Container,
  Text,
  Button,
  Group,
  Navbar,
  Anchor,
  Box
} from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import UsersList from "./Views/UsersList";
import PostList from "./Views/PostList";
import Registration from "./Views/Registration";
import AppHeader from "./Shared/Header";
import { useNavigate } from "react-router-dom";

function App() {
  /*
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await supabaseClient.get("/users");
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
*/
  // dummie pages
  /*
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about-us" element={<AboutUs />} />
     </Routes>
   </BrowserRouter>
*/

/*
const AppHeader = () => {
  console.log("AppHeader is rendering"); // Debug log
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Group>
        <Button variant="subtle" onClick={() => navigate("/")} size="sm">
          Home
        </Button>
        <Button variant="subtle" onClick={() => navigate("/posts")} size="sm">
          Posts
        </Button>
        <Button variant="subtle" onClick={() => navigate("/users")} size="sm">
          Users
        </Button>
        <Button
          variant="subtle"
          onClick={() => navigate("/registration")}
          size="sm"
        >
          Register
        </Button>
      </Group>
    </Box>
  );
};
*/
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <AppHeader /> {/* Render AppHeader directly */}
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </Container>
      </Router>
    </MantineProvider>
  );
};
  /*
  return (
    <div className="App">
      <header className="App-header">
        {users &&
          users.map((user) => (
            <div>

              <p>Ime:{user?.name}</p>
              <p>Prezime:{user?.last_name}</p>
              <p>
                Korisnicko Ime:<b>{user?.username}</b>
              </p>
              <p>
                Aktivan:<b>{user?.is_active}</b>
              </p>
            </div>
          ))}
      </header>
    </div>
  );
}
*/
export default App;
