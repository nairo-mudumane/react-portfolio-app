import { Box, Typography } from "@mui/material";
import { useTheme } from "../../hooks";
import { StyledService } from "./styles";
import { IServiceProps } from "./types";

export function Service(props: IServiceProps) {
    const { isDark } = useTheme();

    return (
        <StyledService isDark={isDark}>
            {props.service.icon && (
                <Box className="icon-container">{props.service.icon}</Box>
            )}

            <Typography variant="h4" className="title">
                {props.service.title}
            </Typography>

            <Typography variant="body2" className="description">
                {props.service.description}
            </Typography>
        </StyledService>
    );
}
