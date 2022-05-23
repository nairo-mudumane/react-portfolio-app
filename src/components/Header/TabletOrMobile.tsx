import { Box } from "@mui/material";
import { Container } from "../Container";
import { Text } from "../Typography";
import { StyledTabletOrMobile } from "./styles";

export function TabletOrMobile() {
    return (
        <Container>
            <StyledTabletOrMobile>
                <Text>TabletOrMobile</Text>
            </StyledTabletOrMobile>
        </Container>
    );
}
