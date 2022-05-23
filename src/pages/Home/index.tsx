import { Box, Typography } from "@mui/material";
import { StyledHome } from "./styles";

export function Home() {
    return (
        <StyledHome>
            <Box className="landing">
                <Typography className="text normal">
                    Proident fugiat ut cupidatat labore cupidatat.
                </Typography>
            </Box>
        </StyledHome>
    );
}
