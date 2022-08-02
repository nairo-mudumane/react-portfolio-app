import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../../hooks";
import { StyledTitle } from "./styles";
import { ITitleProps } from "./types";

export function Title(props: ITitleProps) {
    const { isDark } = useTheme();

    return (
        <React.Fragment>
            <StyledTitle isDark={isDark} {...props}>
                {props.icon && <Box className="icon">{props.icon}</Box>}

                <Typography
                    variant={props.isHead ? "h1" : "h2"}
                    className="title"
                >
                    {props.text}
                </Typography>
            </StyledTitle>

            {props.children}
        </React.Fragment>
    );
}
