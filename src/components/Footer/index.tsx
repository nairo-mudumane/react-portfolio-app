import { Box } from "@mui/material";
import { useTheme } from "../../hooks";
import Copyright from "./Copyright";
import { StyledFooter } from "./styles";

export function Footer() {
  const { isDark } = useTheme();

  return (
    <StyledFooter isDark={isDark}>
      <Box className="footer-root">
        <h4>footer</h4>
      </Box>

      <Copyright />
    </StyledFooter>
  );
}
