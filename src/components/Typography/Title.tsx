import { Typography, TypographyVariant } from "@mui/material";
import { StyledTypography } from "./styles";
import { ITitleProps } from "./types";

export function Title(props: ITitleProps) {
    return (
        <StyledTypography textType="title">
            <Typography
                variant={
                    props.variant ? (props.variant as TypographyVariant) : "h1"
                }
                sx={props.sx}
                className="text bold"
                {...props}
            >
                {props.children}
            </Typography>
        </StyledTypography>
    );
}
