import { Container as MuiContainer, ContainerProps } from "@mui/material";

export function Container(props: ContainerProps) {
    return <MuiContainer>{props.children}</MuiContainer>;
}
