export interface IProjectLink {
    type: "url" | "git";
    url: string;
}

export interface IProjectTools {
    label: string;
    link?: string;
}

export interface IProject {
    name: string;
    description: string[];
    link: IProjectLink;
    banner: string;
}
