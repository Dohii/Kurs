import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { SupabaseProvider } from "./Shared/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SupabaseProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </SupabaseProvider>
  </React.StrictMode>
);
