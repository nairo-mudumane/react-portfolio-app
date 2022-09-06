import { Box, Container, Typography } from "@mui/material";
import { Copyright as MuiCopyright } from "@mui/icons-material";
import { StyledCopyright } from "./styles";
import { useTheme } from "../../hooks";

export default function Copyright() {
  const { isDark } = useTheme();
  const year = new Date().getFullYear().toString();

  return (
    <StyledCopyright isDark={isDark}>
      <Container>
        <Box className="copy-container">
          <Typography variant="body2" className="text-icon">
            <MuiCopyright className="icon" /> Naíro Mudumane - {year}
          </Typography>
        </Box>
      </Container>
    </StyledCopyright>
  );
}
