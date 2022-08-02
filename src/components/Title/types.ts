import { IChildren } from "../../types";

export interface ITitleProps extends IChildren {
    text: string;
    isHead?: boolean;
    icon?: React.ReactNode;
}
