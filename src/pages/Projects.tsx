import grow_your_x from "../assets/project/grow_your_x.png";
import job_cred_fill from "../assets/project/job_cred_fill.png";
import GithubIcon from "../icons/GithubIcon";
import ProjectIcon from "../icons/ProjectIcon";
import WebIcon from "../icons/WebIcon";

interface ProjectModel {
  logo: string;
  name: string;
  skills: string[];
  description: string;
  github: string | undefined;
  website: string | undefined;
}

const projectList: ProjectModel[] = [
  {
    logo: grow_your_x,
    name: "grow-your-x",
    skills: ["python", "flask", "twitter api"],
    description: "A bot that automatically tweets (posts) on Twitter (X).",
    github: "",
    website: undefined,
  },
  {
    logo: job_cred_fill,
    name: "JobCredFill",
    skills: ["typescript", "react", "chrome api"],
    description:
      "A chrome extension that fills credentials on job boards to save your time.",
    github: "",
    website: "",
  },
];

const Projects = () => {
  return (
    <section>
      <div className="flex justify-center flex flex-col items-center py-10 gap-4 md:py-20">
        <div className="motion-safe:animate-bounce">
          <ProjectIcon size="lg" />
        </div>
        <h1 className="text-primary text-4xl font-bold md:text-8xl">
          Projects
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        {projectList.map((project, index) => (
          <div className="card bg-base-200" key={index}>
            <div className="card-body flex flex-col gap-5 items-center md:flex-row">
              <div className="ring ring-accent ring-offset-base-200 ring-offset-4">
                <img className="w-32 h-32" src={project.logo} />
              </div>
              <div className="flex flex-col text-center md:text-left gap-1">
                <h3 className="font-serif text-xl">{project.name}</h3>
                <span className="font-serif text-lg ">
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
                  <button className="btn btn-circle">
                    <GithubIcon />
                  </button>
                  <button className="btn btn-circle">
                    <WebIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
