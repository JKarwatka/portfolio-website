import { SectionContainer } from "@components/SectionContainer";
import { Typography } from "@mui/material";
import React from "react";

export const AboutSection: React.FC = () => (
  <SectionContainer title="About">
    <Typography variant="h4" component="p">
      Hi my name is Jakub and I am front-end developer based in Poland. I
      specialise in creating interactive experiences and functional interfaces
      using cutting-edge technologies.
    </Typography>
  </SectionContainer>
);
