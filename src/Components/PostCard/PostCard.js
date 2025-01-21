import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { usePostContext } from "../../Context/PostContext";
import { useAppContext } from "../../Context/AppContext";

function PostCard({ post }) {
  const { deletePost } = usePostContext();
  const { isLoggedIn } = useAppContext();

  const handleDelete = () => {
    if (post) {
      deletePost(post.id);
    }
  };
  return (
    <>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{ height: 350, overflowY: "auto" }}
      >
        <Card.Section>
          <Image
            src={
              post.image && post.image !== ""
                ? post.image
                : "https://c4.wallpaperflare.com/wallpaper/527/620/961/the-witcher-video-games-wolf-the-witcher-3-wild-hunt-wallpaper-preview.jpg"
            }
            height={160}
            alt="post"
          />
        </Card.Section>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{new Date(post.created_at).toDateString()}</Text>
          <Text fw={500}>{post.title}</Text>
          <Badge color={post?.is_deleted ? "red" : "green"}></Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {post.description}
        </Text>

        {isLoggedIn && (
          <Button
            color="red"
            fullWidth
            mt="md"
            radius="lg"
            onClick={handleDelete}
          >
            Delete Post
          </Button>
        )}
      </Card>
    </>
  );
}
export default PostCard;
