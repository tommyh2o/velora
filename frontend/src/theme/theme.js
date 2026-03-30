import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f4a261",
      light: "#f7b889",
      dark: "#dd8742",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffd6b8",
    },
    background: {
      default: "#fffaf7",
      paper: "#ffffff",
    },
    text: {
      primary: "#262626",
      secondary: "#6f6f6f",
    },
  },
  typography: {
    fontFamily: ["Inter", "system-ui", "Arial", "sans-serif"].join(","),
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 18,
  },
});

export default theme;
