import { Center, Box } from "@mantine/core";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import UserMenuButton from "../UserMenu/UserMenuButton";
import { useAppContext } from "../../Context/AppContext";

function Header() {
  const { isLoggedIn } = useAppContext();
  const navigate = useNavigate();
  return (
    <Center mt={15} mb={0}>
      <Box m={"auto"}>
        <Button onClick={() => navigate("/posts")} radius="mg" mr={10}>
          Post List
        </Button>
        {isLoggedIn && (
          <Button onClick={() => navigate("/users")} radius="mg" mr={10}>
            User List
          </Button>
        )}

        {!isLoggedIn && (
          <Button onClick={() => navigate("/")} radius="mg" mr={10}>
            Log in
          </Button>
        )}
      </Box>
      {isLoggedIn && <UserMenuButton />}
    </Center>
  );
}
export default Header;
