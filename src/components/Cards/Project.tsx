import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Typography,
} from "@mui/material";
import { useTheme } from "../../hooks";
import { StyledCardProject } from "./styles";
import { ICardProject } from "./types";

export function CardProject(props: ICardProject) {
    const { isDark } = useTheme();

    if (
        props.project.link &&
        (props.project.link.type === "url" || props.project.link.type === "git")
    ) {
        return (
            <StyledCardProject isDark={isDark}>
                <Card className="card">
                    <a
                        target="_blank"
                        className="link"
                        href={props.project.link.url}
                    >
                        <CardMedia
                            component="img"
                            className="banner-image"
                            image={props.project.banner}
                            alt={`${props.project.name}'s image banner`}
                        />
                    </a>

                    <CardContent>
                        <Typography variant="h3" className="title">
                            {props.project.name}
                        </Typography>

                        <Box className="tools">
                            {props.project.tools.map((tool, index) => (
                                <Chip
                                    key={index}
                                    label={tool}
                                    className="chip"
                                />
                            ))}
                        </Box>

                        {props.project.description && (
                            <Box className="description">
                                {props.project.description.map((desc) => (
                                    <Typography key={desc} variant="body2">
                                        {desc}
                                    </Typography>
                                ))}
                            </Box>
                        )}
                    </CardContent>
                </Card>
            </StyledCardProject>
        );
    }

    return null;
}
