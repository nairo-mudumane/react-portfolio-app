import { IMyService } from "../types";
import { v4 as uid4 } from "uuid";

export const MY_SERVICES: IMyService[] = [
    {
        uid: uid4(),
        title: "Web Design",
        description:
            "Minim reprehenderit eiusmod eu ad veniam consectetur. Nisi ea voluptate qui mollit labore occaecat reprehenderit est nostrud occaecat culpa nulla sint. Ex quis pariatur excepteur proident incididunt voluptate aliquip et. Laborum minim cillum incididunt mollit consequat consequat in incididunt ea sint dolore do mollit qui. Nisi Lorem deserunt labore dolor. Enim occaecat veniam aute ullamco incididunt tempor deserunt quis. Lorem fugiat cillum Lorem officia tempor magna id quis.",
    },
    {
        uid: uid4(),
        title: "Ui Design",
        description:
            "Non id sunt adipisicing nisi deserunt dolore quis laborum sit nulla mollit fugiat nisi adipisicing. Velit dolor cupidatat fugiat exercitation velit laborum anim ipsum ad. Fugiat anim id irure eu aute anim elit pariatur et sint proident pariatur sunt. Elit culpa elit sint ut Lorem in eu sit velit officia. Laborum irure nostrud sint pariatur tempor ea aliqua proident nulla deserunt. Ad id adipisicing magna incididunt proident nostrud anim occaecat quis incididunt elit esse ad consequat. Adipisicing aliquip officia quis ea sint pariatur ea consectetur sint.",
    },
    {
        uid: uid4(),
        title: "Web Development",
        description:
            "Culpa tempor duis aute aliquip commodo culpa sit. Esse ipsum nisi velit do adipisicing. Deserunt eiusmod adipisicing et pariatur dolor ullamco consequat duis officia id ad tempor mollit commodo. Duis amet esse magna do pariatur esse laboris occaecat.",
    },
];
