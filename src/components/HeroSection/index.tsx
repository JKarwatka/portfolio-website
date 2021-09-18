import { Typography } from "@mui/material";
import React from "react";
import { SectionContainer } from "./atoms";

export const HeroSection: React.FC = () => (
  <SectionContainer>
    <Typography variant="h1" component="h1" gutterBottom>
      Jakub Karwatka
      <br />
      Frontend Developer
    </Typography>
  </SectionContainer>
);
