import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

export const StyledLine = styled(Box)(
  ({ theme }) => `
  display: inline-block;
  width: 100%;
  border-top: 2px solid ${theme.palette.text.primary};
  margin: 0 60px;
`
);

export const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;
