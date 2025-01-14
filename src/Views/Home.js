import React from "react";
import { useEffect, useState } from "react";
import supabaseClient from "../api/axiosConfig";
import { Container, Grid, TextInput, Button, Text } from "@mantine/core";

function Home() {
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
return (
    <Text size="xl">Welcome to the Homepage!</Text>
    );
}

export default Home

