import { Button, Modal, TextInput } from "@mantine/core";
import { useState } from "react";
import { useUserContext } from "../../Context/UserContext";

function RegistrationDialog({ open, setOpen }) {
  const { createUser } = useUserContext();

  const [user, setUser] = useState({
    is_active: false,
    name: null,
    last_name: null,
    username: null,
    password: null,
  });

  const handleOnSubmit = async () => {
    createUser(user);
    setOpen(false);
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
