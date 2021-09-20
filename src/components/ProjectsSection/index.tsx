import { ProjectHighlight, ProjectProps } from "@components/ProjectHighlight";
import { SectionContainer } from "@components/SectionContainer";
import { Grid } from "@mui/material";
import React from "react";
import { ProjectsList } from "./atoms";

const projectsData = [
  {
    title: " Dummy 1",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac urna auctor, cursus ante a, volutpat massa. Maecenas eros est, molestie eget efficitur eu, laoreet eu metus.`,
    link: "#",
    githubLink: "#",
    highlightPhoto: "images/hero-background.jpg",
  },
  {
    title: " Dummy 2",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac urna auctor, cursus ante a, volutpat massa. Maecenas eros est, molestie eget efficitur eu, laoreet eu metus.`,
    link: "#",
    githubLink: "#",
    highlightPhoto: "images/hero-background.jpg",
  },
  {
    title: " Dummy 3",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac urna auctor, cursus ante a, volutpat massa. Maecenas eros est, molestie eget efficitur eu, laoreet eu metus.`,
    link: "#",
    githubLink: "#",
    highlightPhoto: "images/hero-background.jpg",
  },
];

interface ProjectsSectionProps {
  projects?: ProjectProps[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects = projectsData,
}) => (
  <SectionContainer title="Projects">
    <ProjectsList>
      {projects.map((projectProps, index) => (
        <ProjectHighlight
          key={index}
          {...projectProps}
          flipped={index % 2 !== 0}
        />
      ))}
    </ProjectsList>
  </SectionContainer>
);
