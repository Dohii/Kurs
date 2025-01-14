import { Badge, Card, Group, Image, Text } from "@mantine/core";

interface PostCardProps {
  post: any;
}

function PostCard({ post }: PostCardProps) {
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
          <Image src={post.image} height={160} alt="post" />
        </Card.Section>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{new Date(post.created_at).toDateString()}</Text>
          <Text fw={500}>{post.title}</Text>
          <Badge color={post?.is_deleted ? "red" : "green"}></Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {post.description}
        </Text>
      </Card>
    </>
  );
}
export default PostCard;
