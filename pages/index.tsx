import React from "react";
import { Button, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "src/utils/theme";

const Home: React.FC = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" color="secondary">
          Hello There!
        </Button>
      </ThemeProvider>
    </CssBaseline>
  );
};
export default Home;
