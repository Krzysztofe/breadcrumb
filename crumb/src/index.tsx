import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import "./scss/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

let theme = createTheme({
  palette: {
    primary: {
      main: "rgb(77,84,96)",
    },

    secondary: {
      main: "rgb(161,193,232)",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.5rem",
      color: "rgb(153,153,153)",
    },
  },
});
theme = responsiveFontSizes(theme);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
