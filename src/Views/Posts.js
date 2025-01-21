import { Button, Container, Grid } from "@mantine/core";
import { usePostContext } from "../Context/PostContext";
import PostCard from "../Components/PostCard/PostCard";
import { useMemo, useState } from "react";
import PostDialog from "../Components/PostDialog/PostDialog";
import { useAppContext } from "../Context/AppContext";
import PostFilterDrawer from "../Components/PostFilterDrawer/PostFilterDrawer";
import PostSortButton from "../Components/PostSortButton/PostSortButton";
import Search from "../Components/Search/Search";

function Posts() {
  const { posts, activeFilters, activeSort, setSearchText, searchText } =
    usePostContext();
  const { isLoggedIn } = useAppContext();
  const [open, setOpen] = useState(false);

  const filteredPosts = useMemo(() => {
    // let searchedPosts =[...posts];
    // if(!!searchText&&searchText !== '') {
    //     searchedPosts = posts.filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()));
    // }   --- Spojio u jedan filter
    if (!activeFilters.author && (!searchText || searchText === "")) {
      return posts;
    }
    return posts?.filter((post) => {
      let autorCondition = true;
      let searchCondition = true;
      if (activeFilters.author) {
        autorCondition = post.user_id === Number(activeFilters.author);
      }
      if (!!searchText && searchText !== "") {
        searchCondition = post.title
          .toLowerCase()
          .includes(searchText.toLowerCase());
      }
      return autorCondition && searchCondition;
    });
  }, [activeFilters.author, posts, searchText]);
  const sortedPosts = useMemo(() => {
    if (!activeSort) {
      return filteredPosts;
    }
    return filteredPosts?.sort((a, b) => {
      switch (activeSort) {
        case "titleAsc":
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        case "titleDesc":
          return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
        case "dateAsc":
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
        case "dateDesc":
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        default:
          return 0;
      }
    });
  }, [activeSort, filteredPosts]);

  return (
    <Container m={0} mt={20} fluid>
      <PostDialog open={open} setOpen={setOpen} />
      <Button disabled={!isLoggedIn} onClick={() => setOpen(true)}>
        Create Post
      </Button>
      <div
        style={{
          float: "right",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "end",
        }}
      >
        <Search searchText={searchText} setSearchText={setSearchText} />
        <PostSortButton />
        <PostFilterDrawer />
      </div>
      <Container m={0} mt={20} fluid>
        <Grid>
          {sortedPosts &&
            // @ts-ignore
            sortedPosts.map((post, index) => (
              <Grid.Col span={3} key={`post_${index}`}>
                <PostCard post={post} />
              </Grid.Col>
            ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default Posts;
