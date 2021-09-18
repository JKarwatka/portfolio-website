import React from "react";
import { AppBar, Link, Toolbar } from "@mui/material";
import { LinksContainer, ToolbarContainer } from "./atoms";

interface NavBarProps {
  renderLogo: () => JSX.Element;
  links?: Link[];
}

interface Link {
  href: string;
  title: string;
  onClick?: () => void;
}

const linksData: Link[] = [
  {
    href: "#",
    title: "Home",
  },
  {
    href: "#",
    title: "About",
  },
  {
    href: "#",
    title: "Projects",
  },
  {
    href: "#",
    title: "Contact",
  },
];

export const NavBar: React.FC<NavBarProps> = ({
  links = linksData,
  renderLogo,
}) => (
  <AppBar position="absolute">
    <Toolbar>
      <ToolbarContainer>
        {renderLogo()}
        <LinksContainer>
          {links.map(({ href, title }) => (
            <Link href={href}>{title}</Link>
          ))}
        </LinksContainer>
      </ToolbarContainer>
    </Toolbar>
  </AppBar>
);
