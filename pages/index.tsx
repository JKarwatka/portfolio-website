import React from "react";
import { CssBaseline } from "@mui/material";
import { NavBar } from "@components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "src/utils/theme";
import { LogoIcon } from "@components/LogoIcon";
import { HeroSection } from "@components/HeroSection";

const renderLogo = () => <LogoIcon />;

const Home: React.FC = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <NavBar renderLogo={renderLogo}></NavBar>
        <HeroSection />
      </ThemeProvider>
    </CssBaseline>
  );
};
export default Home;
