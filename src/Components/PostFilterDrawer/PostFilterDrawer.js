import { Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { usePostContext } from "../../Context/PostContext";
import { useUserContext } from "../../Context/UserContext";

function PostFilterDrawer() {
  const [opened, { open, close }] = useDisclosure(false);
  const { setActiveFilters, activeFilters } = usePostContext();
  const { users } = useUserContext();

  const optionsFilter = ({ options, search }) => {
    const filtered = options.filter((option) =>
      option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
    );

    filtered.sort((a, b) => a.label.localeCompare(b.label));
    return filtered;
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Filters"
        transitionProps={{
          transition: "rotate-left",
          duration: 150,
          timingFunction: "linear",
        }}
      >
        <form>
          <Select
            label="Author"
            data={users.map((user) => ({
              value: `${user.id}`,
              label: `${user.name} ${user.last_name}`,
            }))}
            onChange={(value) => {
              setActiveFilters((prevValues) => {
                return {
                  ...prevValues,
                  author: value,
                };
              });
            }}
            filter={optionsFilter}
            value={activeFilters.author}
            clearable
            searchable
          />
        </form>
      </Drawer>

      <Button variant="default" onClick={open}>
        Filters
      </Button>
    </>
  );
}

export default PostFilterDrawer;

// function UserFilterButton() {
//   const navigate = useNavigate();
//   const { onLogOut } = useAppContext();
//   return (
//     <Menu shadow="md" width={200}>
//       <Menu.Target>
//         <IconUserHexagon
//           size={35}
//           stroke={2}
//           color="var(--mantine-color-blue-filled)"
//         />
//       </Menu.Target>

//       <Menu.Dropdown>
//         <Menu.Item
//           leftSection={<IconSettings size={14} />}
//           onClick={() => navigate("/user")}
//         >
//           My Account
//         </Menu.Item>
//         <Menu.Item
//           leftSection={<IconLogout size={14} />}
//           onClick={() => onLogOut()}
//         >
//           Log Out
//         </Menu.Item>
//       </Menu.Dropdown>
//     </Menu>
//   );
// }
// export default UserFilterButton;
