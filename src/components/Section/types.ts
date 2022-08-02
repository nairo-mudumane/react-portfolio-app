import { IChildren } from "../../types";

export interface ISectionStyles {
    sizing?: number;
    sizingX?: number;
    sizingY?: number;
}

export interface ISectionProps extends IChildren {
    styles?: ISectionStyles;
}
