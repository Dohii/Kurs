import { useEffect, useState } from 'react';
import supabaseClient from '../../api/axiosConfig';
import Header from '../../Components/Header';

function Home() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await supabaseClient.get('/users');
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <>
      <div className='App'>
        <header className='App-header'>
          {users &&
            users.map((user) => (
              <div key={user.name}>
                <p>Ime:{user?.name}</p>
                <p>Prezime:{user?.last_name}</p>
                <p>
                  Korisnicko Ime:<b>{user?.username}</b>
                </p>
                <p>
                  Aktivan:<b>{user?.is_active}</b>
                </p>
              </div>
            ))}
        </header>
      </div>
    </>
  );
}

export default Home;
