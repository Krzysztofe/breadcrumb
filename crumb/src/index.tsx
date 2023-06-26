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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

let theme = createTheme({
  palette: {
    primary: {
      main: "rgb(242,242,242)",
    },

    secondary: {
      main: "rgb(153,161,173)",
    },
    info: {
      main: "rgb(168,188,122)",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "0.8rem",
      fontWeight: 500,
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
