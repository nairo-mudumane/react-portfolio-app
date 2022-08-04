import { Box, Typography } from "@mui/material";
import { useTheme } from "../../hooks";
import { StyledCardService } from "./styles";
import { IServiceProps } from "./types";

export function CardService(props: IServiceProps) {
    const { isDark } = useTheme();

    return (
        <StyledCardService isDark={isDark}>
            {props.service.icon && (
                <Box className="icon-container">{props.service.icon}</Box>
            )}

            <Typography variant="h4" className="title">
                {props.service.title}
            </Typography>

            <Typography variant="body2" className="description">
                {props.service.description}
            </Typography>
        </StyledCardService>
    );
}
