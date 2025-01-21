import { Menu } from "@mantine/core";
import { IconSettings, IconLogout, IconUserHexagon } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context/AppContext";

function UserMenuButton() {
  const navigate = useNavigate();
  const { onLogOut } = useAppContext();
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <IconUserHexagon
          size={35}
          stroke={2}
          color="var(--mantine-color-blue-filled)"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconSettings size={14} />}
          onClick={() => navigate("/user")}
        >
          My Account
        </Menu.Item>
        <Menu.Item
          leftSection={<IconLogout size={14} />}
          onClick={() => onLogOut()}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
export default UserMenuButton;
