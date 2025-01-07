import "./App.css";
import { useEffect, useState } from "react";
import jsonApiInstance from "./api/axiosConfig";

function App() {
  const [posts, setPosts] = useState();
  const [id, setId] = useState();

  const fetchPosts = async () => {
    try {
      const response = await jsonApiInstance.get("/posts");
      setPosts(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      await jsonApiInstance.delete(`/posts/${id}`);
      setPosts((prevPosts) =>
        prevPosts.filter((post) => post.id !== Number(id))
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleDelete}>
          <label>Id</label>
          <input
            id="id"
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <button type="submit">obrisi</button>
        </form>

        {posts &&
          posts.map((post) => (
            <div>
              <p>Title:{post?.title}</p>
              <p>Body:{post?.body}</p>
              <p>
                user ID:<b>{post?.userId}</b>
              </p>
              <p>
                ID:<b>{post?.id}</b>
              </p>
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
