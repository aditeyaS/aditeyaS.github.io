import React, { useState } from "react";
import { SectionContainer } from "../../components/layout/section-container";
import { H1, H2, TXT2 } from "../../components/ui";
import { Icon } from "./icon";
import { MagneticHover } from "../../components/layout/magnetic-hover";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

import {
  AWS,
  ChromeWebStore,
  Cpp,
  Express,
  Flask,
  FramerMotion,
  GitHub,
  GitHubActions,
  Java,
  MongoDb,
  OpenAI,
  Python,
  ReactIcon,
  TailwindCss,
  Typescript,
  Web,
} from "../../icons";
import grow_your_x from "../../assets/projects/grow_your_x.png";
import job_cred_fill from "../../assets/projects/job_cred_fill.png";
import mcl from "../../assets/projects/my_cover_letter.png";
import clemson from "../../assets/education/clemson.png";
import { USER_TWITTER_URL } from "../../user-data";
import SectionProps from "../../types/section-props";

type ProjectType = {
  name: string;
  logo: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  skills: { name: string; icon: React.ReactNode }[];
};
const projectList: ProjectType[] = [
  {
    name: "portfolio",
    logo: "logo.png",
    description: "My portfolio website to showcase my projects, skills, etc.",
    githubLink: "https://github.com/aditeyaS/aditeyaS.github.io",
    liveLink: "https://aditeyaS.github.io",
    skills: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Typescript", icon: <Typescript /> },
      { name: "Tailwind CSS", icon: <TailwindCss /> },
      { name: "Framer Motion", icon: <FramerMotion /> },
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
      { name: "Python", icon: <Python /> },
      { name: "Flask", icon: <Flask /> },
      { name: "OpenAI API", icon: <OpenAI /> },
      { name: "GitHub Actions", icon: <GitHubActions /> },
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
      { name: "MongoDB", icon: <MongoDb /> },
      { name: "React", icon: <ReactIcon /> },
      { name: "Typescript", icon: <Typescript /> },
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
      { name: "React", icon: <ReactIcon /> },
      { name: "Typescript", icon: <Typescript /> },
      { name: "Chrome Extensions", icon: <ChromeWebStore /> },
    ],
  },
  {
    name: "MSCS Clemson",
    logo: clemson,
    description:
      "All the assignments and projects that I did during my Master's at Clemson University.",
    githubLink: "https://github.com/aditeyaS/MSCS-Clemson",
    skills: [
      { name: "AWS", icon: <AWS /> },
      { name: "Java", icon: <Java /> },
      { name: "Python", icon: <Python /> },
      { name: "C++", icon: <Cpp /> },
    ],
  },
];

export const Projects: React.FC<SectionProps> = ({ sectionIndex }) => {
  return (
    <SectionContainer sectionIndex={sectionIndex}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Icon />
          <H1>Projects</H1>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
          {projectList.map((project, index) => (
            <div
              key={`project-${index}`}
              className="flex gap-2 p-0.5 lg:p-2 rounded-xl hover:bg-foreground/15"
            >
              <img className="w-12 h-12" srcSet={project.logo} />
              <div className="flex flex-col gap-1">
                <H2>{project.name}</H2>
                <div className="flex gap-1 items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="cursor-pointer p-1 rounded-full bg-foreground/10 hover:bg-background"
                  >
                    <MagneticHover>
                      <GitHub />
                    </MagneticHover>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="cursor-pointer p-1 rounded-full bg-foreground/10 hover:bg-background"
                    >
                      <MagneticHover>
                        <Web />
                      </MagneticHover>
                    </a>
                  )}
                </div>
                <TXT2 className="text-sm font-light">
                  {project.description}
                </TXT2>
                <div className="flex gap-2 flex-wrap items-center">
                  {project.skills.map((skill, index) => {
                    const [isHovered, setIsHovered] = useState<boolean>(false);
                    return (
                      <motion.div
                        key={`project-${project.name}-skill-${index}`}
                        className="relative text-primary cursor-pointer"
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                      >
                        {skill.icon}
                        {isHovered && (
                          <motion.div
                            className={cn(
                              "absolute bottom-full mb-2",
                              "left-1/2 transform -translate-x-1/2",
                              "bg-background text-xs font-code rounded-md py-1 px-2 shadow-lg z-10"
                            )}
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                          >
                            {skill.name}
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
