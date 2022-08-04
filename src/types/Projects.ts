interface IProjectLink {
    type: "url" | "git";
    url: string;
}

export interface IProject {
    uid: string;
    name: string;
    banner: string;
    tools: string[];
    description?: string[];
    link?: IProjectLink;
}
