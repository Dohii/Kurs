import UserCard from "../Components/UserCard/UserCard";
import { Button, Container, Grid } from "@mantine/core";
import { useUserContext } from "../Context/UserContext";
import RegistrationDialog from "../Components/RegistrationDialog/RegistrationDialog";
import { useMemo, useState } from "react";
import { useAppContext } from "../Context/AppContext";
import Search from "../Components/Search/Search";

function Users() {
  // @ts-ignore
  const { users, setSearchText, searchText } = useUserContext();
  const { isLoggedIn } = useAppContext();

  const filteredUsers = useMemo(() => {
    if (!searchText || searchText === "") {
      return users;
    }
    return users?.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, users]);

  const [open, setOpen] = useState(false);

  return (
    <Container m={0} mt={20} fluid>
      <RegistrationDialog open={open} setOpen={setOpen} />
      <Button disabled={!isLoggedIn} onClick={() => setOpen(true)}>
        Create User
      </Button>
      <div
        style={{
          float: "right",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "end",
        }}
      >
        <Search searchText={searchText} setSearchText={setSearchText} />
      </div>
      <Container m={0} mt={20} fluid>
        <Grid>
          {filteredUsers &&
            filteredUsers.map((user, index) => (
              <Grid.Col span={3} key={`user_${index}`}>
                <UserCard user={user} />
              </Grid.Col>
            ))}
        </Grid>
      </Container>
    </Container>
  );
}
export default Users;
