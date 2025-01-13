import './App.css';
import Home from './Views/Home-page/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Users from './Views/Users-page/Users';
import Posts from './Views/Posts-page/Posts';
import { useState, useEffect } from 'react';
import supabaseClient from './api/axiosConfig';

function App() {
  const [users, setUsers] = useState();
  const fetchUsers = async () => {
    try {
      const { data } = await supabaseClient.get('/users');
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header users={users} fetchUsers={fetchUsers} />
        <Routes>
          <Route
            path='/'
            element={<Home users={users} fetchUsers={fetchUsers} />}
          />
          <Route
            path='/users'
            element={<Users users={users} fetchUsers={fetchUsers} />}
          />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
