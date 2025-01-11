import Project from "@/types/project";
import {
  S_Aws,
  S_Chromewebstore,
  S_Express,
  S_Flask,
  S_Framer,
  F_Githubactions,
  S_React,
  S_Typescript,
  S_Tailwind,
  S_Python,
  S_Cplusplus,
  S_Openai,
  S_Mongodb,
  S_Java,
} from "./skill";

const PROJECTS: Project[] = [
  {
    name: "portfolio",
    description: "My portfolio website to showcase my projects, skills, etc.",
    link: "https://github.com/aditeyaS/aditeyaS.github.io",
    skills: [S_React, S_Typescript, S_Tailwind, S_Framer],
  },
  {
    name: "grow-your-x",
    description:
      "A python (Flask) bot that automatically tweets (posts) on Twitter (X) based on certain topics using the Open AI API, which runs through GitHub actions as CRON jobs.",
    link: "https://github.com/aditeyaS/grow-your-x",
    skills: [S_Python, S_Flask, S_Openai, F_Githubactions],
  },
  {
    name: "MyCoverLetter",
    description: "MERN Stack application used to save cover letter templates.",
    link: "https://github.com/aditeyaS/MyCoverLetter",
    skills: [S_Express, S_Mongodb, S_React, S_Typescript],
  },
  {
    name: "JobCredFill",
    description:
      "A chrome extension that fills credentials on job boards to save your time.",
    link: "https://github.com/aditeyaS/JobCredFill",
    skills: [S_React, S_Typescript, S_Chromewebstore],
  },
  {
    name: "MSCS Clemson",
    description:
      "All the assignments and projects that I did during my Master's at Clemson University.",
    link: "https://github.com/aditeyaS/MSCS-Clemson",
    skills: [S_Aws, S_Java, S_Python, S_Cplusplus],
  },
];

export default PROJECTS;
