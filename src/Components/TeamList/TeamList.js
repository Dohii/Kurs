import { Grid, Title } from "@mantine/core";
import TeamCard from "../TeamCard/TeamCard";
import { useSupabase } from "../../Shared/AppContext";

function TeamList() {
  const { team } = useSupabase();
  return (
    <>
      <Title order={3}>Članovi tima:</Title>
      <Grid>
        {team.map((teamMember, index) => (
          <Grid.Col span={3} key={`teamMember_${index}`}>
            <TeamCard teamMember={teamMember} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
export default TeamList;
