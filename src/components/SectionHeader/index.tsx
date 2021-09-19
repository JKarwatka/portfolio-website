import { Grid, Typography } from "@mui/material";
import React from "react";
import { HeaderContainer, StyledLine } from "./atoms";

export const SectionHeader: React.FC = ({ children }) => (
  <HeaderContainer>
    <StyledLine />
    <Typography variant="h2" component="h2">
      {children}
    </Typography>
    <StyledLine />
  </HeaderContainer>
);
