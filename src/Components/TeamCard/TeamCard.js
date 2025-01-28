import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";

function TeamCard({ teamMember }) {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src={
              teamMember.image ??
              "https://media.istockphoto.com/id/1557854355/vector/default-anonymous-user-portrait-icon-design-user-member-people-icon-in-flat-style-circle.jpg?s=170667a&w=0&k=20&c=lSSXaJA_exvP-EmcT4KtbZNjdC0thGe5cmvyQoik9j4="
            }
            height={160}
            alt="User"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{`${teamMember?.name ?? ""} ${
            teamMember?.last_name ?? ""
          }`}</Text>
        </Group>

        <Text size="sm" c="dimmed">
          {teamMember?.role}
        </Text>
      </Card>
    </>
  );
}
export default TeamCard;
