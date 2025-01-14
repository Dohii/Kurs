import React from "react";
import { useEffect, useState } from "react";
import supabaseClient from "../api/axiosConfig";
import {
  Container,
  Grid,
  TextInput,
  Button,
  Text,
  Box,
  Group,
  Loader,
  Notification,
  List
} from "@mantine/core";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          //setLoading(true);
          const { data } = await supabaseClient.get("/users");         
          setUsers(data);          
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };

      fetchUsers();
    }, []);

const deleteUser = async (userId) => {
    try {
      const { error } = await supabaseClient.from("users").delete().eq("id", userId);
      if (error) {
        throw error;
      }
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError(err.message || "Failed to delete user");
    }
  };

const handleDelete = (index) => {
  const updatedItems = users.filter((_, i) => i !== index);
  setUsers(updatedItems);
};

    return (
      <div className="App">
        <header className="App-header">
          {users &&
            users.map((user, index) => (
              <div>
                <p key={user.id}>Id: {user.id}</p>
                <p>Ime: {user?.name}</p>
                <p>Prezime: {user?.last_name}</p>
                <p>
                  Korisnicko Ime: <b>{user?.username}</b>
                </p>
                <p>
                  Aktivan: <b>{user?.is_active}</b>
                </p>
                <p>
                  <Button
                    variant="outline"
                    color="white"
                    size="lg"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete User
                  </Button>
                </p>
              </div>
            ))}
        </header>
      </div>

      /*
      <Box p="md" mx="auto" style={{ maxWidth: 600 }}>
        <h2>User List</h2>
        {error && (
          <Notification color="red" onClose={() => setError("")}>
            {error}
          </Notification>
        )}
        { users.length > 0 ? (
          <List spacing="sm" size="sm" withPadding>
            {users.map((user) => (
              <List.Item
                key={user.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {user.name} {user.last_name} ({user.username})
                <Button
                  variant="outline"
                  color="red"
                  size="xs"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
              </List.Item>
            ))}
          </List>
        ) : (
          <p>No users found.</p>
        )}
      </Box>
          */
    );
}

export default UsersList;
