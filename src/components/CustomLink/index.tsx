import React from "react";
import { StyledLink } from "./atoms";

interface LinkProps {
  href: string;
}

export const CustomLink: React.FC<LinkProps> = ({ href, children }) => (
  <StyledLink href={href}>{children}</StyledLink>
);
