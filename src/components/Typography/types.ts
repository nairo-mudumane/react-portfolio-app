import { SxProps, TypographyVariant } from "@mui/material";
import { IChildren } from "../../types";

export interface ITypographyStyle {
    textType: "title" | "text" | "muted";
}

export interface ITypographyTypes extends IChildren {
    sx?: SxProps;
    className?: string;
}

export interface ITextProps extends ITypographyTypes {
    muted?: boolean;
}

export interface ITitleProps extends ITypographyTypes {
    variant?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "subtitle1"
        | "subtitle2";
}
