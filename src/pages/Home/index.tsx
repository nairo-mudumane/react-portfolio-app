import { Box, Typography } from "@mui/material";
import { Text, Title } from "../../components";
import { StyledHome } from "./styles";

export function Home() {
    return (
        <StyledHome>
            <Box className="landing">
                <Title>Aute excepteur sint.</Title>

                <Text muted>
                    Proident fugiat ut cupidatat labore cupidatat.
                </Text>
            </Box>
        </StyledHome>
    );
}
