import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import store from "./Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  /** Put your mantine theme override here */
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
