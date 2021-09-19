import { SectionHeader } from "@components/SectionHeader";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface SectionContainerProps {
  title?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  title,
}) => (
  <Box py={16}>
    <Container>
      {title && <SectionHeader>{title}</SectionHeader>}
      {children}
    </Container>
    ;
  </Box>
);
