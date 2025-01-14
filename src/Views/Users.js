import { useSelector } from "react-redux";
import UserCard from "../Components/UserCard/UserCard";
import { Button, Container, Grid } from "@mantine/core";
import { useSupabase } from "../Shared/AppContext";

function Users() {
  // @ts-ignore
  const {
    users,
    fetchUsers,
    posts,
    loading,
    error,
    nekiPodatak,
    setNekiPodatak,
  } = useSupabase();
  console.log(nekiPodatak);

  return (
    <>
      <Button onClick={() => setNekiPodatak(Number(nekiPodatak) + 2)}>
        {" "}
        cimni usere
      </Button>
      <Container m={0} mt={30} fluid>
        <Grid>
          {users &&
            users.map((user, index) => (
              <Grid.Col span={3} key={`user_${index}`}>
                <UserCard user={user} />
              </Grid.Col>
            ))}
        </Grid>
      </Container>
    </>
  );
}
export default Users;
