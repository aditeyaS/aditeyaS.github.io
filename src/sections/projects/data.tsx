import {
  AWS,
  ChromeWebStore,
  Cpp,
  Express,
  Flask,
  FramerMotion,
  GitHubActions,
  Java,
  MongoDb,
  OpenAI,
  Python,
  ReactIcon,
  TailwindCss,
  Typescript,
} from "../../icons";
import grow_your_x from "../../assets/projects/grow_your_x.png";
import job_cred_fill from "../../assets/projects/job_cred_fill.png";
import mcl from "../../assets/projects/my_cover_letter.png";
import clemson from "../../assets/education/clemson.png";
import { USER_TWITTER_URL } from "../../user-data";

type ProjectType = {
  name: string;
  logo: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  skills: { name: string; icon: React.ReactNode; color?: string }[];
};

export const PROJECT_LIST: ProjectType[] = [
  {
    name: "portfolio",
    logo: "logo.png",
    description: "My portfolio website to showcase my projects, skills, etc.",
    githubLink: "https://github.com/aditeyaS/aditeyaS.github.io",
    liveLink: "https://aditeyaS.github.io",
    skills: [
      { name: "React", icon: <ReactIcon />, color: "#61DAFB" },
      { name: "Typescript", icon: <Typescript />, color: "#3178C6" },
      { name: "Tailwind CSS", icon: <TailwindCss />, color: "#06B6D4" },
      { name: "Framer Motion", icon: <FramerMotion />, color: "#0055FF" },
    ],
  },
  {
    name: "grow-your-x",
    logo: grow_your_x,
    description:
      "A python (Flask) bot that automatically tweets (posts) on Twitter (X) based on certain topics using the Open AI API, which runs through GitHub actions as CRON jobs.",
    githubLink: "https://github.com/aditeyaS/grow-your-x",
    liveLink: USER_TWITTER_URL,
    skills: [
      { name: "Python", icon: <Python />, color: "#3776AB" },
      { name: "Flask", icon: <Flask /> },
      { name: "OpenAI API", icon: <OpenAI />, color: "#412991" },
      { name: "GitHub Actions", icon: <GitHubActions />, color: "#2088FF" },
    ],
  },
  {
    name: "MyCoverLetter",
    logo: mcl,
    description: "MERN Stack application used to save cover letter templates.",
    githubLink: "https://github.com/aditeyaS/MyCoverLetter",
    liveLink: "https://mycoverletter-client.onrender.com/",
    skills: [
      { name: "Express", icon: <Express /> },
      { name: "MongoDB", icon: <MongoDb />, color: "#47A248" },
      { name: "React", icon: <ReactIcon />, color: "#61DAFB" },
      { name: "Typescript", icon: <Typescript />, color: "#3178C6" },
    ],
  },
  {
    name: "JobCredFill",
    logo: job_cred_fill,
    description:
      "A chrome extension that fills credentials on job boards to save your time.",
    githubLink: "https://github.com/aditeyaS/JobCredFill",
    liveLink: "https://jobcredfill.onrender.com/",
    skills: [
      { name: "React", icon: <ReactIcon />, color: "#61DAFB" },
      { name: "Typescript", icon: <Typescript />, color: "#3178C6" },
      { name: "Chrome Extensions", icon: <ChromeWebStore />, color: "#4285F4" },
    ],
  },
  {
    name: "MSCS Clemson",
    logo: clemson,
    description:
      "All the assignments and projects that I did during my Master's at Clemson University.",
    githubLink: "https://github.com/aditeyaS/MSCS-Clemson",
    skills: [
      { name: "AWS", icon: <AWS />, color: "#FF9900" },
      { name: "Java", icon: <Java />, color: " #F89820" },
      { name: "Python", icon: <Python />, color: "#3776AB" },
      { name: "C++", icon: <Cpp />, color: "#00599C" },
    ],
  },
];
