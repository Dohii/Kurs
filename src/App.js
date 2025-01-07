import "./App.css";
import { useId, useState } from "react";
import jsonApiInstance from "./api/axiosConfig";

function App() {
  const [posts, setPosts] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const userId = useId();

  const fetchPosts = async () => {
    try {
      const response = await jsonApiInstance.get("/posts");
      setPosts(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await jsonApiInstance.post("/posts", {
        title,
        body,
        userId: userId,
      });
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Body</label>
          <input
            id="title"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit">Posalji</button>
        </form>

        {posts && (
          <div>
            <p>Title:{posts.title}</p>
            <p>Body:{posts.body}</p>
            <p>
              user ID:<b>{posts.userId}</b>
            </p>
            <p>
              ID:<b>{posts.id}</b>
            </p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
