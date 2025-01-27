import { Timeline, Text } from "@mantine/core";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
} from "@tabler/icons-react";

function AboutUsTimeline() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="17.12.2024.">
        <Text c="dimmed" size="sm">
          {`Početak kursa: `}
          <Text variant="link" component="span" inherit>
            Uvod u React
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          5 weeks ago
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="07.01.2025.">
        <Text c="dimmed" size="sm">
          Prvi GitHub commit
          <Text variant="link" component="span" inherit></Text>
        </Text>
        <Text size="xs" mt={4}>
          prije 2 sedmice
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Završetak zadatka"
        bullet={<IconGitPullRequest size={12} />}
        lineVariant="dashed"
      >
        <Text c="dimmed" size="sm">
          Zadatak commitan na novu granu
          <Text variant="link" component="span" inherit></Text>
        </Text>
        <Text size="xs" mt={4}>
          upravo sada
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Završetak kursa"
        bullet={<IconMessageDots size={12} />}
      >
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Tim završava React kurs
          </Text>
        </Text>
        <Text size="xs" mt={4}>
          akcija na čekanju
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
export default AboutUsTimeline;
