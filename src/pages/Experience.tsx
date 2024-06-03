import ExperienceIcon from "../icons/ExperienceIcon";
import clemson from "../assets/experience/clemson.png";
import rc from "../assets/experience/rc.png";
import hashedin from "../assets/experience/hashedin.png";
import erp from "../assets/experience/erp.png";
import { useEffect } from "react";

interface ExperienceModel {
  logo: string;
  organization: string;
  location: string;
  position: string;
  duration: string;
}

const experienceList: ExperienceModel[] = [
  {
    logo: clemson,
    organization: "Clemson University",
    location: "Clemson, SC, US",
    position: "Graduate Teaching Assistant",
    duration: "01.2023 - 05.2024",
  },
  {
    logo: rc,
    organization: "Raising Cane's",
    location: "Clemson, SC, US",
    position: "Crew Member",
    duration: "08.2022 - 08.2023",
  },
  {
    logo: hashedin,
    organization: "HashedIn by Deloitte",
    location: "Bengaluru, KA, IN",
    position: "Software Engineer",
    duration: "06.2021 - 08.2022",
  },
  {
    logo: hashedin,
    organization: "HashedIn by Deloitte",
    location: "Remote, IN",
    position: "Software Engineer Intern",
    duration: "03.2021 - 06.2021",
  },
  {
    logo: erp,
    organization: "TeamERP",
    location: "Ghaziabad, UP, IN",
    position: "Full stack developer intern",
    duration: "06.2018 - 02.2021",
  },
];
const Experience = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="py-10">
      <div className="flex justify-center flex flex-col items-center py-10 gap-4">
        <div className="motion-safe:animate-bounce">
          <ExperienceIcon size="lg" />
        </div>
        <h1 className="text-primary text-4xl font-bold md:text-8xl">
          Experience
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        {experienceList.map((experience, index) => (
          <div className="card bg-base-200" key={index}>
            <div className="card-body flex flex-col gap-5 items-center md:flex-row">
              <div className="ring ring-accent ring-offset-base-200 ring-offset-4">
                <img className="w-32 h-32" src={experience.logo} />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <h3 className="font-serif text-xl">
                  {experience.organization}
                </h3>
                <span className="text-lg  text-neutral">
                  {experience.location}
                </span>
                <span className="text-lg  text-neutral">
                  {experience.position}
                </span>
                <span className="text-lg  text-neutral">
                  {experience.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
