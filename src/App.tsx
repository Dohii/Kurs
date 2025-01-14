import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./Views/Posts";
import Users from "./Views/Users";
import { useEffect } from "react";
import supabaseClient from "./api/axiosConfig";
import { Container } from "@mantine/core";
import { useDispatch } from "react-redux";
import { setData, setRefetch } from "./Store/Slices/UserSlice";

function App() {
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    try {
      const { data } = await supabaseClient.get("/users");
      dispatch(setData(data));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    dispatch(setRefetch(fetchUsers));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
