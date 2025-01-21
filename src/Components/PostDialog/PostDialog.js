import { Button, Modal, Select, TextInput } from "@mantine/core";
import { useState } from "react";
import { usePostContext } from "../../Context/PostContext";
import { useUserContext } from "../../Context/UserContext";

function PostDialog({ open, setOpen }) {
  const { createPost } = usePostContext();
  const { users } = useUserContext();

  const [post, setPost] = useState({
    is_deleted: false,
    user_id: null,
    title: null,
    description: null,
    image: null,
  });

  const handleOnSubmit = async () => {
    createPost(post);
    setOpen(false);
  };

  const optionsFilter = ({ options, search }) => {
    const filtered = options.filter((option) =>
      option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
    );

    filtered.sort((a, b) => a.label.localeCompare(b.label));
    return filtered;
  };

  return (
    <Modal
      opened={open}
      onClose={() => setOpen(false)}
      title="Add Post"
      centered
    >
      <form>
        <TextInput
          withAsterisk
          label="Title"
          placeholder="Title"
          key={"title"}
          onChange={(event) => {
            setPost((prevValues) => {
              return {
                ...prevValues,
                title: event?.target?.value,
              };
            });
          }}
        />
        <TextInput
          withAsterisk
          label="Description"
          placeholder="Description"
          key={"description"}
          onChange={(event) => {
            setPost((prevValues) => {
              return {
                ...prevValues,
                description: event?.target?.value,
              };
            });
          }}
        />
        <TextInput
          label="Image"
          placeholder="Image"
          key={"image"}
          onChange={(event) => {
            setPost((prevValues) => {
              return {
                ...prevValues,
                image: event?.target?.value,
              };
            });
          }}
        />
        <Select
          withAsterisk
          label="Author"
          data={users.map((user) => ({
            value: `${user.id}`,
            label: `${user.name} ${user.last_name}`,
          }))}
          onChange={(value, option) => {
            setPost((prevValues) => {
              return {
                ...prevValues,
                user_id: value,
              };
            });
          }}
          filter={optionsFilter}
          value={post.user_id}
          searchable
        />
        <Button ml={160} mt={10} onClick={handleOnSubmit}>
          Submit
        </Button>
      </form>
    </Modal>
  );
}
export default PostDialog;
