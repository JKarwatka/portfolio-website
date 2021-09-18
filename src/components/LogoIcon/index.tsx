import React from "react";
import LogoSvg from "./logo-icon.svg";
import { StyledLogo } from "./atoms";

export const LogoIcon: React.FC = () => (
  <StyledLogo component={LogoSvg} viewBox="0 0 1181 1181" />
);
