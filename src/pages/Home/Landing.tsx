import { Box, Typography, Button } from "@mui/material";
import { PageContainer } from "../../components/";
import { StyledHome, StyledLanding } from "./styles";

export function Landing() {
    return (
        <PageContainer>
            <StyledHome>
                <StyledLanding>
                    <Box className="content">
                        <Box className="heading">
                            <Typography
                                variant="h3"
                                component="h1"
                                className="title"
                            >
                                Hi, this is NaiRo Mudumane
                            </Typography>
                        </Box>

                        <Box className="description">
                            <Typography variant="body1">
                                Mollit non esse nostrud qui veniam cupidatat
                                excepteur duis proident reprehenderit Lorem sit.
                                Esse ex elit deserunt adipisicing. Quis ea ex ex
                                eu ad eu pariatur labore do exercitation qui.
                            </Typography>
                        </Box>

                        <Box className="link-works">
                            <Button variant="contained" className="btn">
                                See works
                            </Button>
                        </Box>
                    </Box>
                </StyledLanding>
            </StyledHome>
        </PageContainer>
    );
}
