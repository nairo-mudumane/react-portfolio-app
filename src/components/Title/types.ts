import { IChildren, ICurrentTheme } from "../../types";

export interface ITitleProps extends IChildren {
    text: string;
    icon?: React.ReactNode;
    isHead?: boolean;
    noMargin?: boolean;
    className?: string;
}

export interface IStyledTitle extends ICurrentTheme {
    noMargin?: boolean;
}
