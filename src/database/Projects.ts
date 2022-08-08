import { IProject } from "../types";
import { v4 as uid4 } from "uuid";

// assets
import cassamo from "../assets/images/projects/cassamo.jpg";
import contactForm from "../assets/images/projects/contact-form.jpg";
import dioInstagram from "../assets/images/projects/dio-instagram.jpg";
import liveEduca from "../assets/images/projects/live-educa.jpg";

export const MY_PROJECTS: IProject[] = [
    {
        uid: uid4(),
        banner: liveEduca,
        name: "Educa Moçambique",
        tools: [
            "TypeScript",
            "ReactJS",
            "NodeJS",
            "Express",
            "Emotion",
            "NodeMailer",
            "MUI System",
            "Vite",
            "Tailwind CSS",
            "Axios",
            "Firebase",
            "React Query",
            "Styled Components",
            "React Select",
            "Animate CSS",
            "Phosphor Icons",
            "Bootstrap",
            "Slick Carousel",
            "uuid",
            "Cors",
            "Dotenv",
            "Multer",
            "Date IO",
        ],
        link: {
            type: "url",
            url: "https://event.educa.co.mz/",
        },
        description: [
            "The biggest national education event. A true moment of convergence of thoughts, where several national and international agents of the education sector find space for exchange of experience, debate, presentation of proposals on the quality and challenges of the sector in the country.",
            "Through this platform, users can participate remotely in the conference and fair (https://live.educa.co.mz). Create and manage your exhibitor account online through: https://educa.co.mz and https://educa.co.mz respectively",
        ],
    },
    {
        uid: uid4(),
        banner: contactForm,
        name: "Contact Form",
        tools: [
            "Cors",
            "Express",
            "ReactJS",
            "Firebase",
            "NodeJS",
            "Mui System",
            "Axios",
            "TypeScript",
            "Styled Components",
        ],
        link: {
            type: "git",
            url: "https://github.com/nairo-mudumane/void-front-end",
        },
    },
    {
        uid: uid4(),
        banner: dioInstagram,
        name: "Instagram Clone",
        link: {
            type: "git",
            url: "https://github.com/nairo-mudumane/dio-instagram",
        },
        tools: ["HTML", "CSS"],
        description: ["A simple clone of Instagram login page."],
    },
    {
        uid: uid4(),
        banner: cassamo,
        name: "Nuvunga's portfolio",
        tools: [
            "Firebase",
            "EJS",
            "NodeJS",
            "Express",
            "Animate CSS",
            "AOS",
            "Bootstrap",
            "Light Box",
        ],
        link: {
            type: "url",
            url: "https://cassamonuvunga.com",
        },
        description: [
            `Personal portfolio website of the founder of CADE, containing ideas, projects, testimonials, among other information`,
        ],
    },
];
