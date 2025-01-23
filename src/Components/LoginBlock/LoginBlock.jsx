import { Modal, Flex, Group, Button } from "@mantine/core";
import classes from "./LoginBlock.module.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../common/AppContext";
import useDebounce from "../../common/useDebounce";

function LoginBlock({ open, setOpen }) {
  const {
    users,
    loggedIn,
    setLoggedIn,
    loggedInUserData,
    setLoggedInUserData,
  } = useAppContext();

  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [value, setValue] = useState("");

  console.log(value);
  return (
    <Modal opened={open} onClose={() => setOpen(false)} title="Login" centered>
      <form className={classes.loginForm}>
        <Flex gap="10" mb="10">
          <label style={{ width: "30%" }}>Username</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setValue(e.target.value)}
          />
        </Flex>
        <Flex gap="10" mb="10">
          <label style={{ width: "30%" }}>Password</label>
          <input type="password" name="password" />
        </Flex>
        {error && (
          <Flex gap="10" mb="10">
            <p>Login username or password is not correct! Try again!</p>
          </Flex>
        )}
        <Group justify="center" mt="10">
          <Button
            className={classes.solidBtn}
            onClick={() => console.log(value)}
          >
            Log in
          </Button>
        </Group>
      </form>
    </Modal>
  );
}

export default LoginBlock;
