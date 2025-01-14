import React, { useEffect, useState } from "react";
import {
  Modal,
  TextInput,
  PasswordInput,
  Button,
  Group,
  Box,
  Text,
} from "@mantine/core";
import supabaseClient from "../api/axiosConfig";
// import supabaseClient from "../api/supabaseClient";

function Registration() {
  const [users, setUsers] = useState([]);
  const [opened, setOpened] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    last_name: "",
    username: "",
    password: "",
    is_active: false,
    created_at: new Date().toISOString(),
  });
  const [error, setError] = useState("");

  const addUser = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before submission

    try {
      const { name, last_name, username, password } = newUser;

      if (!name || !last_name || !username || !password) {
        setError("All fields are required!");
        return;
      }

      const { data, error } = await supabaseClient.from("users").insert([
        {
          name,
          last_name,
          username,
          password,
          is_active: true,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        throw error;
      }

      setUsers((prevUsers) => [...prevUsers, data[0]]);
      setOpened(false);
      setNewUser({
        name: "",
        last_name: "",
        username: "",
        password: "",
        is_active: false,
        created_at: new Date().toISOString(),
      });
    } catch (err) {
      setError(err.message || "Failed to add user");
    }
  };

  return (
    <Box>
      <Group position="center" mt="xl">
        <Button onClick={() => setOpened(true)}>Add New User</Button>
      </Group>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add New User"
        centered
      >
        <form onSubmit={addUser}>
          <TextInput
            label="First Name"
            placeholder="Enter first name"
            value={newUser.name}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
          <TextInput
            label="Last Name"
            placeholder="Enter last name"
            value={newUser.last_name}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, last_name: e.target.value }))
            }
            required
            mt="sm"
          />
          <TextInput
            label="Username"
            placeholder="Enter username"
            value={newUser.username}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, username: e.target.value }))
            }
            required
            mt="sm"
          />
          <PasswordInput
            label="Password"
            placeholder="Enter password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, password: e.target.value }))
            }
            required
            mt="sm"
          />

          {error && (
            <Text color="red" mt="md">
              {error}
            </Text>
          )}

          <Group position="right" mt="md">
            <Button variant="outline" onClick={() => setOpened(false)}>
              Cancel
            </Button>
            <Button type="submit">Add User</Button>
          </Group>
        </form>
      </Modal>
    </Box>
  );
}

export default Registration;
