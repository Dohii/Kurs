import UserCard from "../Components/UserCard/UserCard";
import { Container, Grid } from "@mantine/core";

function Users({ users, fetchUsers }) {
  return (
    <Container m={0} mt={30} fluid>
      <Grid>
        {users &&
          users.map((user, index) => (
            <Grid.Col span={3} key={`user_${index}`}>
              <UserCard user={user} fetchUsers={fetchUsers} />
            </Grid.Col>
          ))}
      </Grid>
    </Container>
  );
}
export default Users;
