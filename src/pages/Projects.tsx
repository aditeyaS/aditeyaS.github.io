import { useEffect } from "react";
import grow_your_x from "../assets/project/grow_your_x.png";
import job_cred_fill from "../assets/project/job_cred_fill.png";
import github_viewer from "../assets/project/github_viewer.png";
import mscs_cu from "../assets/project/mscs_cu.png";
import online_resume from "../assets/project/online_resume.png";
import top20trending from "../assets/project/top20trending.png";
import peoples_choice from "../assets/project/peoples_choice.png";
import GithubIcon from "../icons/GithubIcon";
import ProjectIcon from "../icons/ProjectIcon";
import WebIcon from "../icons/WebIcon";
import PageContainer from "../components/PageContainer";
import Card from "../components/Card";

interface ProjectModel {
  logo: string;
  name: string;
  skills: string[];
  description: string;
  github?: string;
  website?: string;
}

const projectList: ProjectModel[] = [
  {
    logo: grow_your_x,
    name: "grow-your-x",
    skills: [
      "python",
      "flask",
      "twitter api",
      "github actions",
      "open ai api",
      "cron jobs",
    ],
    description:
      "A python (Flask) bot that automatically tweets (posts) on Twitter (X) based on certain topics using the Open AI API, which runs through GitHub actions as CRON jobs.",
    github: "https://github.com/aditeyaS/grow-your-x",
    website: "https://x.com/aditeyaaaa",
  },
  {
    logo: job_cred_fill,
    name: "JobCredFill",
    skills: [
      "typescript",
      "react",
      "chrome api",
      "chrome extensions",
      "chrome developer tools",
    ],
    description:
      "A chrome extension that fills credentials on job boards to save your time.",
    github: "https://github.com/aditeyaS/JobCredFill",
    website: "https://jobcredfill.onrender.com",
  },
  {
    logo: github_viewer,
    name: "github-viewer",
    skills: ["typescript", "react", "tailwind css"],
    description:
      "An website that shows the profile of a GitHub user, much better that GitHub.",
    github: "https://github.com/aditeyaS/github-viewer",
    website: "https://github-viewer-4bx3.onrender.com",
  },
  {
    logo: mscs_cu,
    name: "MSCS-Clemson",
    skills: ["aws", "blockchain", "dbms", "java", "sql", "c++", "python"],
    description:
      "All the assignments and projects that I did during my Master's at Clemson University.",
    github: "https://github.com/aditeyaS/MSCS-Clemson",
  },
  {
    logo: online_resume,
    name: "online-resume",
    skills: ["react", "typescript", "tailwind css", "rest api"],
    description:
      "⭐ A minimal yet modern resume like portfolio that can be easily deployed by changing some configurations",
    github: "https://github.com/aditeyaS/online-resume",
    website: "https://aditeyas.github.io/online-resume",
  },
  {
    logo: top20trending,
    name: "top20trending",
    skills: ["react", "typescript", "tailwind css", "rest api"],
    description: "Shows the top 20 trending Movies, TV Shows, and Music",
    github: "https://github.com/aditeyaS/top20trending",
    website: "https://top20trending.onrender.com",
  },
  {
    logo: peoples_choice,
    name: "peoples-choice",
    skills: ["HTML", "CSS", "javascript"],
    description:
      "Created this simple repo for students to contribute. It tracks the contributor's favourite anime, movie, and Tv series.",
    github: "https://github.com/aditeyaS/peoples-choice",
    website: "https://aditeyas.github.io/peoples-choice",
  },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <PageContainer
      title="Projects"
      icon={<ProjectIcon size="lg" />}
      pageBody={
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {projectList.map((project, index) => (
            <Card
              key={index}
              body={
                <div className="flex flex-col gap-5 items-center md:flex-row">
                  <div className="ring ring-accent ring-offset-base-200 ring-offset-4">
                    <img
                      className="w-32 h-32 min-w-32 min-h-32"
                      src={project.logo}
                    />
                  </div>
                  <div className="flex flex-col text-center md:text-left gap-1">
                    <h3 className="font-serif text-xl">{project.name}</h3>
                    <span className="font-serif text-lg text-neutral">
                      {project.description}
                    </span>
                    <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                      {project.skills.map((skill) => (
                        <div
                          key={skill}
                          className="rounded-xl px-4 py-0.5 bg-secondary sext-sm text-secondary-content"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 justify-center md:justify-start">
                      {project.github && (
                        <button
                          className="btn btn-circle"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <GithubIcon />
                        </button>
                      )}
                      {project.website && (
                        <button
                          className="btn btn-circle"
                          onClick={() => window.open(project.website, "_blank")}
                        >
                          <WebIcon />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      }
    />
  );
};

export default Projects;
