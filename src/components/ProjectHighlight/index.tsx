import { Button, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import React from "react";
import {
  ButtonsContainer,
  ProjectCard,
  ProjectCardContent,
  ProjectCardMedia,
} from "./atoms";

export interface ProjectProps {
  title: string;
  description: string;
  link: string;
  githubLink: string;
  highlightPhoto: string;
  flipped?: boolean;
}

export const ProjectHighlight: React.FC<ProjectProps> = ({
  title,
  description,
  link,
  githubLink,
  highlightPhoto,
  flipped,
}) => (
  <ProjectCard variant="outlined" flipped={flipped}>
    <ProjectCardContent>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {description}
      </Typography>
      <ButtonsContainer>
        <Button
          variant="outlined"
          href={link}
          component="a"
          endIcon={<ArrowForwardIosSharpIcon />}
        >
          Check it out
        </Button>
        <Button
          variant="outlined"
          href={githubLink}
          component="a"
          endIcon={<GitHubIcon />}
        >
          View code
        </Button>
      </ButtonsContainer>
    </ProjectCardContent>
    <ProjectCardMedia component="img" image={highlightPhoto} alt={title} />
  </ProjectCard>
);
