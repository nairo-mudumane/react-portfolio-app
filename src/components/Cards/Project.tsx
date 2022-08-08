import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Typography,
} from "@mui/material";
import { Eye, GitBranch, Link, Star } from "phosphor-react";
import { useTheme } from "../../hooks";
import { StyledCardProject } from "./styles";
import { ICardProject } from "./types";

export function CardProject(props: ICardProject) {
    const { isDark } = useTheme();

    if (props.project.link && props.project.link.type === "url") {
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
                        <Box className="project-title">
                            <a
                                target="_blank"
                                className="link"
                                href={props.project.link.url}
                            >
                                <Link className="icon" />
                                <Typography variant="h3" className="title">
                                    {props.project.name}
                                </Typography>
                            </a>
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

                        <Box className="tools">
                            {props.project.tools.map((tool, index) => (
                                <Chip
                                    key={index}
                                    label={tool}
                                    className="chip"
                                />
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </StyledCardProject>
        );
    } else if (props.project.link && props.project.link.type === "git") {
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
                        <Box className="project-title">
                            <a
                                target="_blank"
                                className="link"
                                href={props.project.link.url}
                            >
                                <GitBranch className="icon" />
                                <Typography variant="h3" className="title">
                                    {props.project.name}
                                </Typography>
                            </a>
                        </Box>

                        <Box className="git-data">
                            <Typography
                                variant="body2"
                                className="text-muted git-info"
                            >
                                <Eye className="icon" />
                                {"23k"}
                            </Typography>

                            <Typography
                                variant="body2"
                                className="text-muted git-info"
                            >
                                <Star className="icon" />
                                {"50k"}
                            </Typography>
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

                        <Box className="tools">
                            {props.project.tools.map((tool, index) => (
                                <Chip
                                    key={index}
                                    label={tool}
                                    className="chip"
                                />
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </StyledCardProject>
        );
    }

    return null;
}
