import React from "react";
import { Typography, Button } from "@material-ui/core";
import { NavBar } from "@components/NavBar";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "src/utils/theme";

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="outlined" color="secondary">
        Hello There!
      </Button>
    </ThemeProvider>
  );
};
export default Home;
