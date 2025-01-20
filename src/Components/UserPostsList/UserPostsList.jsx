import classes from './UserPostsList.module.css';

function UserPostsList({ posts }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Post ID</td>
          <td>Post Title</td>
          <td>Post Description</td>
        </tr>
      </thead>
      <tbody>
        {posts &&
          posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.description}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default UserPostsList;
