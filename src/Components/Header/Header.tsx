import { Center, Box } from "@mantine/core";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import RegistrationDialog from "../RegistrationDialog/RegistrationDialog";
import { useState } from "react";

function Header() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Center mt={15} mb={0}>
      <Box m={"auto"}>
        <Button onClick={() => navigate("/posts")} radius="mg" mr={10}>
          Posts List
        </Button>
        <Button onClick={() => navigate("/users")} radius="mg" mr={10}>
          User List
        </Button>
        <Button onClick={() => setDialogOpen(true)} radius="mg">
          Registration
        </Button>
        <RegistrationDialog open={dialogOpen} setOpen={() => setDialogOpen} />
      </Box>
    </Center>
  );
}
export default Header;
