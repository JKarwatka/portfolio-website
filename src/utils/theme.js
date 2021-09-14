import { green, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
    text: {
      primary: "#212121",
      secondary: "#fff",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        color: "textSecondary",
        underline: "none",
      },
      styleOverrides: {
        root: {
          margin: "0 20px",
          textTransform: "uppercase",
          fontSize: "24px",
          fontWeight: 500,
          color: "",
        },
      },
    },
  },
});
