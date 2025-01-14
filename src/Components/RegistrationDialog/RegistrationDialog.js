import { Button, Modal, TextInput } from "@mantine/core";
import { useMemo, useState } from "react";
import supabaseClient from "../../api/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { triggerRefetch } from "../../Store/Slices/UserSlice";

function RegistrationDialog({ open, setOpen }) {
  // @ts-ignore
  const data = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const nextId = useMemo(
    () => (data?.users?.length ? data?.users.length + 1 : 1),
    [data?.users.length]
  );

  const [user, setUser] = useState({
    id: null,
    is_active: false,
    name: null,
    last_name: null,
    username: null,
    password: null,
  });

  const handleOnSubmit = async () => {
    if (user.name && user.last_name && user.username && user.password) {
      try {
        const newUser = { ...user, id: nextId };
        await supabaseClient.post("/users", newUser);
        dispatch(triggerRefetch());
        setOpen(false);
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
