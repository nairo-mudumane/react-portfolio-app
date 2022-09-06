import { IMyService } from "../types";
import { v4 as uid4 } from "uuid";

export const MY_SERVICES: IMyService[] = [
  {
    uid: uid4(),
    title: "Front-end Development",
    description:
      "Using technologies such as React, Vue, EJS, Tailwind, and more, I develop the front-end with extreme care in terms of accessibility, user experience and of course without making it look pleasant to the user.",
  },
  {
    uid: uid4(),
    title: "Back-end Development",
    description:
      "Business rule, security, database and web services integration, are the main activities carried out by me in the back-end business. I always work around the user, thinking of ways to make their experience easier and faster.",
  },
  {
    uid: uid4(),
    title: "WordPress Development",
    description:
      "I have solid knowledge in WordPress website development and always focused on growth strategies for large organizations, building custom solutions with stability, scalability, extensibility and security.",
  },
  {
    uid: uid4(),
    title: "Web hosting",
    description:
      "In addition to developing from front-end to back-end, I also make your website (or application) available online.",
  },
  {
    uid: uid4(),
    title: "Mobile Development",
    description:
      "I develop mobile app. I create a mobile app with attractive UI.",
  },
  {
    uid: uid4(),
    title: "Professional Email",
    description:
      "I create and take care of all professional email maintenance (name@your-domain.com).",
  },
];
