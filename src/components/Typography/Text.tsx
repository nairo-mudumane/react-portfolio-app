import { Typography } from "@mui/material";
import { StyledTypography } from "./styles";
import { ITextProps } from "./types";

export function Text(props: ITextProps) {
    return (
        <StyledTypography textType={props.muted ? "muted" : "text"}>
            <Typography
                variant={props.muted ? "body2" : "body1"}
                sx={props.sx}
                className="text normal"
                {...props}
            >
                {props.children}
            </Typography>
        </StyledTypography>
    );
}
