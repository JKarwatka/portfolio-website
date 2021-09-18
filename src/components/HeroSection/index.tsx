import { SectionContainer } from "@components/SectionContainer";
import { Typography } from "@mui/material";
import React from "react";
import { HeroSectionBackground } from "./atoms";

export const HeroSection: React.FC = () => (
  <HeroSectionBackground>
    <SectionContainer>
      <Typography variant="h1" component="h1" gutterBottom>
        Jakub Karwatka
        <br />
        Frontend Developer
      </Typography>
    </SectionContainer>
  </HeroSectionBackground>
);
