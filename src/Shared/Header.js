import React from "react";
import {  Group, Button, Box, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function AppHeader() {
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

export default AppHeader;
