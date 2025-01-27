import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { SupabaseProvider } from "./Shared/AppContext";
import { AboutUsProvider } from "./Shared/AboutUsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AboutUsProvider>
      <SupabaseProvider>
        <MantineProvider>
          <App />
        </MantineProvider>
      </SupabaseProvider>
    </AboutUsProvider>
  </React.StrictMode>
);
