import React, { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';
import supabaseClient from '../api/axiosConfig';

const usersContext = createContext(null);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(null);

  const fetchsUsers = async () => {
    try {
      const response = await supabaseClient.get('/users');
      setUsers(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchsUsers();
  }, []);

  return (
    <usersContext.Provider value={{ users, fetchsUsers }}>
      {children}
    </usersContext.Provider>
  );
};

export const useUsersContext = () => {
  const context = useContext(usersContext);
  if (!context) {
    throw new Error('use userContext only inside provider');
  }
  return context;
};
