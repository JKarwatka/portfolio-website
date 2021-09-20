import {
  Card,
  CardContent,
  CardMedia,
  CardMediaProps,
  CardProps,
} from "@mui/material";
import { Box, styled } from "@mui/system";

interface ProjectCardProps extends CardProps {
  flipped?: boolean;
}

export const ProjectCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "flipped",
})<ProjectCardProps>(({ flipped }) => ({
  display: "flex",
  flexDirection: flipped ? "row-reverse" : "row",
}));

export const ProjectCardContent = styled(CardContent)({
  display: "flex",
  padding: "40px",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const ProjectCardMedia = styled(CardMedia)({
  width: "65%",
});

export const ButtonsContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
});
