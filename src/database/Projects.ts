import { IProject } from "../types";
import { v4 as uid4 } from "uuid";

// assets
import cassamo from "../assets/images/projects/cassamo.jpg";
import contactForm from "../assets/images/projects/contact-form.jpg";
import dashEduca from "../assets/images/projects/dash-educa.jpg";
import dioInstagram from "../assets/images/projects/dio-instagram.jpg";
import liveEduca from "../assets/images/projects/live-educa.jpg";
import regEduca from "../assets/images/projects/reg-educa.jpg";

export const MY_PROJECTS: IProject[] = [
    {
        uid: uid4(),
        banner: contactForm,
        name: "Contact Form",
        tools: ["ReactJS", "NodeJS"],
        link: {
            type: "git",
            url: "https://github.com/nairo-mudumane/void-front-end",
        },
        description: [
            "Quis sit Lorem dolor amet minim velit exercitation eu est in nulla ad Lorem.",
        ],
    },
    {
        uid: uid4(),
        banner: liveEduca,
        name: "Educa Moçambique (online)",
        tools: ["NodeJS", "MUI System", "Tailwind CSS"],
        link: {
            type: "url",
            url: "https://event.educa.co.mz/",
        },
    },
    {
        uid: uid4(),
        banner: cassamo,
        name: "Nuvunga's portfolio",
        tools: ["Firebase", "EJS", "NodeJS", "Express"],
        link: {
            type: "url",
            url: "https://cassamonuvunga.com",
        },
        description: [`Cassamo Nuvunga's personal portfolio website`],
    },
];
