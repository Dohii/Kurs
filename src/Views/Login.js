import { Button, Container, TextInput, UnstyledButton } from "@mantine/core";
import { useAppContext } from "../Context/AppContext";
import { useState } from "react";
import RegistrationDialog from "../Components/RegistrationDialog/RegistrationDialog";
import { Navigate } from "react-router-dom";

function Login() {
  const { onLogin, isLoggedIn } = useAppContext();

  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [open, setOpen] = useState(false);

  const handleOnSubmit = () => {
    onLogin(username, password);
  };

  if (isLoggedIn) {
    return <Navigate to="/user" replace={true} />;
  }
  return (
    <Container m={0} mt={30} fluid>
      <form style={{ width: "30%", margin: "auto", marginTop: 20 }}>
        <TextInput
          withAsterisk
          label="User Name"
          placeholder="Username"
          key={"username"}
          onChange={(event) => {
            // @ts-ignore
            setUsername(event?.target?.value);
          }}
        />
        <TextInput
          withAsterisk
          label="Password"
          placeholder="Password"
          key={"password"}
          type="password"
          onChange={(event) => {
            // @ts-ignore
            setPassword(event?.target?.value);
          }}
        />
        <>
          {`Don't have an account? `}
          <UnstyledButton
            onClick={() => setOpen(true)}
            style={{ color: "var(--mantine-color-blue-filled)" }}
          >
            Register
          </UnstyledButton>
        </>
        <Button ml={160} mt={10} onClick={handleOnSubmit}>
          Submit
        </Button>
      </form>
      <RegistrationDialog open={open} setOpen={setOpen} />
    </Container>
  );
}
export default Login;
