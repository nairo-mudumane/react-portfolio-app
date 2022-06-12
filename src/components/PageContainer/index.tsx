import { Box } from "@mui/material";
import { IChildren } from "../../types";

export function PageContainer(props: IChildren) {
    return <Box className="max-w-5xl w-11/12 mx-auto">{props.children}</Box>;
}
