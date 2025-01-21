import { Button, Menu } from "@mantine/core";
import { IconArrowDown, IconCheck } from "@tabler/icons-react";
import { usePostContext } from "../../Context/PostContext";

function PostSortButton() {
  const { activeSort, setActiveSort } = usePostContext();

  const renderCheck = (sortOption) => {
    if (activeSort === sortOption) {
      return <IconCheck size={14} />;
    }
    return null;
  };
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant="default" mr={10}>
          {"Sort by"} <IconArrowDown stroke={2} size={20} />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={renderCheck("titleAsc")}
          onClick={() => setActiveSort("titleAsc")}
        >
          Title A-Z
        </Menu.Item>
        <Menu.Item
          leftSection={renderCheck("titleDesc")}
          onClick={() => setActiveSort("titleDesc")}
        >
          Title Z-A
        </Menu.Item>
        <Menu.Item
          leftSection={renderCheck("dateAsc")}
          onClick={() => setActiveSort("dateAsc")}
        >
          Time created - Asc
        </Menu.Item>
        <Menu.Item
          leftSection={renderCheck("dateDesc")}
          onClick={() => setActiveSort("dateDesc")}
        >
          Time created - Desc
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default PostSortButton;
