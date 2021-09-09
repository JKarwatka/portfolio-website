import { Link } from "@material-ui/core";
import styled from "styled-components";

export const StyledLink = styled(Link)({
  color: "white",
  margin: "0 20px",
  textTransform: "uppercase",
  fontSize: "24px",
  fontWeight: 500,
  fontFamily: "Roboto",
  "&:hover": {
    "text-decoration": "none",
  },
});
