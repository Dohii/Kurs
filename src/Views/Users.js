import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Group,
  Text,
  Loader,
  Modal,
  TextInput,
  FileInput,
} from "@mantine/core";
import { useSupabase } from "../Shared/AppContext";

const Users = () => {
  const { users, fetchUsers, loading, supabaseClient } = useSupabase();
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [addUserModalOpen, setAddUserModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    last_name: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [sortedUsers, setSortedUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");


useEffect(()=>{
  if(users){
    setSortedUsers(users)
  }
  },[users])


  // Open modal and set user ID to delete
  const openDeleteModal = (userId) => {
    setDeleteUserId(userId);
    setModalOpen(true);
  };

  // Close modal
  const closeDeleteModal = () => {
    setDeleteUserId(null);
    setModalOpen(false);
  };

  // Open/close add user modal
  const openAddUserModal = () => setAddUserModalOpen(true);
  const closeAddUserModal = () => setAddUserModalOpen(false);

  // Handle delete confirmation
  const confirmDelete = async () => {
    if (!deleteUserId) return;

    try {
      await supabaseClient.delete(`/users?id=eq.${deleteUserId}`);
      fetchUsers(); // Refresh user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      closeDeleteModal();
    }
  };

  // Upload avatar to Supabase storage
  const uploadAvatar = async (file) => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${newUser.name}-${
      newUser.last_name
    }-${Date.now()}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    const { error } = await supabaseClient.storage
      .from("avatars")
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading avatar:", error);
      return null;
    }

    const { data } = supabaseClient.storage
      .from("avatars")
      .getPublicUrl(filePath);
    return data.publicUrl;
  };

  // Handle adding a new user
  const handleAddUser = async () => {
    try {
      // Use the pre-configured supabaseClient for the POST request
      const response = await supabaseClient.post("/users", {
        name: newUser.name,
        last_name: newUser.last_name,
        // email: newUser.email,
        // avatar: newUser.avatar || "", // Ensure avatar has a default value if not set
      });

      if (response.status !== 201) {
        throw new Error("Failed to add user");
      }

      fetchUsers(); // Refresh the list of users after adding
      closeAddUserModal(); // Close the modal
      setNewUser({ name: "", last_name: "" }); // Reset the form  //  email: "", avatar: ""
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };


  // Sort users by name
  const sortByName = () => {
    const sorted = [...users].sort((a, b) => {
      const nameA = `${a.name || ""} ${a.last_name || ""}`.toLowerCase();
      const nameB = `${b.name || ""} ${b.last_name || ""}`.toLowerCase();

      if (nameA < nameB) return sortOrder === "asc" ? -1 : 1;
      if (nameA > nameB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setSortedUsers(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  if (loading) {
    return (
      <Group align="center" mt="md">
        <Loader size="lg" />
      </Group>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <Group justify="space-between" mb="lg">
        <Text size="lg" fw={500} style={{ marginBottom: "20px" }}>
          Users List
        </Text>
        <Button onClick={openAddUserModal}>Add New User</Button>
      </Group>
      <div
        style={{
          maxHeight: "400px", // Adjust height as needed
          overflowY: "auto",
          border: "1px solid #dee2e6", // Optional for better appearance
        }}
      >
        <Table
          striped
          highlightOnHover
          style={{
            border: "1px solid #dee2e6",
            borderCollapse: "collapse",
            width: "100%",
          }}
        >
          <thead
            style={{
              backgroundColor: "#f8f9fa",
              borderBottom: "1px solid #dee2e6",
            }}
          >
            <tr>
              <th style={{ padding: "8px", textAlign: "left" }}>
                {" "}
                <Button variant="subtle" onClick={sortByName}>
                  Name {sortOrder === "asc" ? "▲" : "▼"}
                </Button>
              </th>
              <th style={{ padding: "8px", textAlign: "left" }}>Email</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Avatar</th>
              <th style={{ padding: "8px", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              sortedUsers.map((user) => (
                <tr key={user.id}>
                  <td style={{ padding: "8px" }}>
                    {`${user.name} ${user.last_name}`}
                  </td>
                  <td style={{ padding: "8px" }}>{user.email}</td>
                  <td style={{ padding: "8px" }}>
                    <img
                      src={
                        user.avatar ||
                        `https://ui-avatars.com/api/?name=${user.name}+ ${user.last_name}`
                      }
                      alt={`${user.name}'s avatar`}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "1px solid #ccc", // Optional border for better appearance
                      }}
                    />
                  </td>
                  <td style={{ padding: "8px" }}>
                    <Button
                      color="red"
                      variant="light"
                      onClick={() => openDeleteModal(user.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", padding: "8px" }}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      {/* Confirmation Modal */}
      <Modal
        opened={modalOpen}
        onClose={closeDeleteModal}
        title="Confirm Delete"
      >
        <Text>
          Are you sure you want to delete this user? This action cannot be
          undone.
        </Text>
        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={closeDeleteModal}>
            Cancel
          </Button>
          <Button color="red" onClick={confirmDelete}>
            Delete
          </Button>
        </Group>
      </Modal>
      {/* Add New User Modal */}
      <Modal
        opened={addUserModalOpen}
        onClose={closeAddUserModal}
        title="Add New User"
      >
        <TextInput
          label="First Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          mb="sm"
        />
        <TextInput
          label="Last Name"
          value={newUser.last_name}
          onChange={(e) =>
            setNewUser({ ...newUser, last_name: e.target.value })
          }
          mb="sm"
        />
        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={closeAddUserModal}>
            Cancel
          </Button>
          <Button color="green" onClick={handleAddUser}>
            Add User
          </Button>
        </Group>
      </Modal>
    </div>
  );
};

export default Users;
