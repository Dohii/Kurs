import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { UserProvider } from "./Context/UserContext";
import { AppProvider } from "./Context/AppContext";
import { PostProvider } from "./Context/PostContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({});
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <UserProvider>
          <AppProvider>
            <PostProvider>
              <App />
            </PostProvider>
          </AppProvider>
        </UserProvider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
