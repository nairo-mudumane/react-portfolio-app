import { Box, Button, IconButton, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Container } from "../Container";
import { Title } from "../Typography";
import { StyledDesktopHeader } from "./styles";
import { IHeaderProps } from "./types";

export function DesktopHeader(props: IHeaderProps) {
    return (
        <Container>
            <StyledDesktopHeader>
                <Title variant="h4">Web developer</Title>

                <Box component="nav" className="nav">
                    <Box className="navigation" component="ul">
                        {props.pages.map((link, index) => (
                            <NavLink
                                to={link.link}
                                key={index}
                                className="link desktop"
                            >
                                <Button color="inherit">{link.label}</Button>
                            </NavLink>
                        ))}
                    </Box>
                </Box>

                <NavLink to="/contacts" className="link">
                    <Button className="btn" variant="contained">
                        Contact me
                    </Button>
                </NavLink>
            </StyledDesktopHeader>
        </Container>
    );
}
