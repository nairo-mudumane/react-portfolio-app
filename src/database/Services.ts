import { IMyService } from "../types";
import { v4 as uid4 } from "uuid";

export const MY_SERVICES: IMyService[] = [
    {
        uid: uid4(),
        title: "Service Name",
        description:
            "Minim reprehenderit eiusmod eu ad veniam consectetur. Nisi ea voluptate qui mollit labore occaecat reprehenderit est nostrud occaecat culpa nulla sint. Ex quis pariatur excepteur proident incididunt voluptate aliquip et.",
    },
    {
        uid: uid4(),
        title: "Service Name",
        description:
            "Non id sunt adipisicing nisi deserunt dolore quis laborum sit nulla mollit fugiat nisi adipisicing. Velit dolor cupidatat fugiat exercitation velit laborum anim ipsum ad. Fugiat anim id irure eu aute anim elit pariatur.",
    },
    {
        uid: uid4(),
        title: "Service Name",
        description:
            "Culpa tempor duis aute aliquip commodo culpa sit. Esse ipsum nisi velit do adipisicing. Deserunt eiusmod adipisicing et pariatur dolor ullamco consequat duis officia id ad tempor mollit commodo. Duis amet esse magna do pariatur.",
    },
];
