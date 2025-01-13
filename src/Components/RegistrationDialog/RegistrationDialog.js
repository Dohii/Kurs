import { Button, Modal, TextInput } from "@mantine/core";
import { useState } from "react";
import supabaseClient from "../../api/axiosConfig";

function RegistrationDialog({ open, setOpen, nextId, fetchUsers }) {
  const [user, setUser] = useState({
    id: null,
    is_active: false,
    name: null,
    last_name: null,
    username: null,
    password: null,
    //^zato sto prepoznaje tipove podataka
  });

  const handleOnSubmit = async () => {
    if (user.name && user.last_name && user.username && user.password) {
      try {
        const newUser = { ...user, id: nextId };
        await supabaseClient.post("/users", newUser);
        setOpen(false);
        fetchUsers();
      } catch (error) {
        console.error("Error saving user:", error);
      }
    }
  };

  return (
    <Modal
      opened={open}
      onClose={() => setOpen(false)}
      title="Add User"
      centered
    >
      <form>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Name"
          key={"name"}
          onChange={(event) => {
            setUser((prevValues) => {
              return {
                ...prevValues,
                name: event?.target?.value,
              };
            });
          }}
        />
        <TextInput
          withAsterisk
          label="Last Name"
          placeholder="Last name"
          key={"last_name"}
          onChange={(event) => {
            setUser((prevValues) => {
              return {
                ...prevValues,
                last_name: event?.target?.value,
              };
            });
          }}
        />
        <TextInput
          withAsterisk
          label="User Name"
          placeholder="Username"
          key={"username"}
          onChange={(event) => {
            setUser((prevValues) => {
              return {
                ...prevValues,
                username: event?.target?.value,
              };
            });
          }}
        />
        <TextInput
          withAsterisk
          label="Password"
          placeholder="Password"
          key={"password"}
          type="password"
          onChange={(event) => {
            setUser((prevValues) => {
              return {
                ...prevValues,
                password: event?.target?.value,
              };
            });
          }}
        />
        <Button ml={160} mt={10} onClick={handleOnSubmit}>
          Submit
        </Button>
      </form>
    </Modal>
  );
}
export default RegistrationDialog;
