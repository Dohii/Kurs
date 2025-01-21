import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function Search({ searchText, setSearchText }) {
  return (
    <div style={{ display: "block", width: 200, marginRight: 10 }}>
      <TextInput
        leftSectionPointerEvents="none"
        placeholder="Search"
        key={"search"}
        leftSection={<IconSearch stroke={2} />}
        value={searchText}
        onChange={(event) => {
          setSearchText(event?.target?.value);
        }}
      />
    </div>
  );
}
export default Search;
