import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import './index.css';
import App from './App';
import { createTheme, MantineProvider } from '@mantine/core';
import { UsersProvider } from './common/UsersContext';
import { PostsProvider } from './common/PostsContext';
import { AppProvider } from './common/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  /** Put your mantine theme override here */
});
root.render(
  <React.StrictMode>
    <UsersProvider>
      <PostsProvider>
        <AppProvider>
          <MantineProvider theme={theme}>
            <App />
          </MantineProvider>
        </AppProvider>
      </PostsProvider>
    </UsersProvider>
  </React.StrictMode>
);
