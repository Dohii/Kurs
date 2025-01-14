import { useSelector } from "react-redux";
import UserCard from "../Components/UserCard/UserCard";
import { Container, Grid } from "@mantine/core";

function Users() {
  // @ts-ignore
  const data = useSelector((state) => state.userReducer);
  return (
    <Container m={0} mt={30} fluid>
      <Grid>
        {data?.users &&
          data.users.map((user, index) => (
            <Grid.Col span={3} key={`user_${index}`}>
              <UserCard user={user} />
            </Grid.Col>
          ))}
      </Grid>
    </Container>
  );
}
export default Users;
