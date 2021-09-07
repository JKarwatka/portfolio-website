import { green, red } from "@material-ui/core/colors";

const { createTheme } = require("@material-ui/core");

export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
