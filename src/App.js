import "./App.css";
import { useEffect, useState } from "react";
import supabaseClient from "./api/axiosConfig";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await supabaseClient.get("/users");
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {users &&
          users.map((user) => (
            <div>
              <p>Ime:{user?.name}</p>
              <p>Prezime:{user?.last_name}</p>
              <p>
                Korisnicko Ime:<b>{user?.username}</b>
              </p>
              <p>
                Aktivan Korisnik:<b>{user?.is_active}</b>
              </p>
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
