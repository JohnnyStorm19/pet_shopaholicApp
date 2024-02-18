import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "#1377df",
            color: "#fff6e7",
            "&:hover": {
              backgroundColor: "#190bb9",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            outline: "1.5px solid #1377df",
            color: "#1377df",
            "&:hover": {
              outline: "2px solid #1377df",
            },
          },
        },
        {
          props: { variant: "text", color: "error"},
          style: {
            backgroundColor: "#eb4938",
            color: "#fff6e7",
            "&:hover": {
              backgroundColor: "#e82611",
              outline: "none"
            },
          },
        },
      ],
      styleOverrides: {
        // root: {
        //   backgroundColor: "#df4837",
        //   color: "#fff6e7",
        //   '&:hover': {
        //     backgroundColor: "rgb(223,72,55,.8)"
        //   }
        // },
      },
    },
  },
  palette: {
    primary: {
      main: "#ffffff",
      light: "#ffffff",
      contrastText: "#22292e",
    },
    info: {
      main: "#190bb9",
      light: "#1377df",
    },
    warning: {
      main: "#eb4938",
    }
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>,
);
