import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import supabaseClient from "../../api/axiosConfig";

function UserCard({ user, fetchUsers }) {
  const handleDelete = async () => {
    if (user) {
      try {
        await supabaseClient.delete(`/users/${user.id}`);
        fetchUsers();
      } catch (error) {
        console.error("Error saving user:", error);
      }
    }
  };
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://media.istockphoto.com/id/1557854355/vector/default-anonymous-user-portrait-icon-design-user-member-people-icon-in-flat-style-circle.jpg?s=170667a&w=0&k=20&c=lSSXaJA_exvP-EmcT4KtbZNjdC0thGe5cmvyQoik9j4="
            height={160}
            alt="User"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{`${user?.name ?? ""} ${user?.last_name ?? ""}`}</Text>
          <Badge color={user?.is_active ? "green" : "red"}></Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {user?.username}
        </Text>

        <Button
          color="red"
          fullWidth
          mt="md"
          radius="lg"
          onClick={handleDelete}
        >
          Delete User
        </Button>
      </Card>
    </>
  );
}
export default UserCard;
