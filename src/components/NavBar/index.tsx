import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { CustomLink } from "@components/CustomLink";
import { LinksContainer, ToolbarContainer } from "./atoms";

interface NavBarProps {
  renderLogo: () => JSX.Element;
  links: Link[];
}

interface Link {
  href: string;
  title: string;
  onClick?: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ links, renderLogo }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <ToolbarContainer>
          {renderLogo()}
          <LinksContainer>
            {links.map(({ href, title }) => (
              <CustomLink href={href}>{title}</CustomLink>
            ))}
          </LinksContainer>
        </ToolbarContainer>
      </Toolbar>
    </AppBar>
  );
};
