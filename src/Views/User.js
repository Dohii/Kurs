import UserCard from "../Components/UserCard/UserCard";
import { Box, Container, Grid, Text } from "@mantine/core";
import { useAppContext } from "../Context/AppContext";
import { usePostContext } from "../Context/PostContext";
import PostCard from "../Components/PostCard/PostCard";
import { Navigate } from "react-router-dom";

function User() {
  const { loggedUser, isLoggedIn } = useAppContext();
  const { posts } = usePostContext();
  const userPosts = posts.filter((post) => post.user_id === loggedUser?.id);

  if (!isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <Container m={0} mt={30} fluid>
        <Box m={"auto"} style={{ width: "50%" }}>
          <UserCard user={loggedUser} />
        </Box>
        <Text fw={500}>My Posts:</Text>

        <br />
        <Grid>
          {userPosts.length === 0 && <Text fw={500}>No posts yet!</Text>}
          {userPosts &&
            // @ts-ignore
            userPosts.map((post, index) => (
              <Grid.Col span={3} key={`user_post_${index}`}>
                <PostCard post={post} />
              </Grid.Col>
            ))}
        </Grid>
      </Container>
    </>
  );
}
export default User;
