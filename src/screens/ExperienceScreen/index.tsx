import ExperienceIcon from "../../icons/ExperienceIcon";
import clemson from "../../assets/experience/clemson.png";
import rc from "../../assets/experience/rc.png";
import hashedin from "../../assets/experience/hashedin.png";
import erp from "../../assets/experience/erp.png";
import { useEffect } from "react";
import { AppScreenContainer, Card, PageContainer } from "../../components";

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
export const ExperienceScreen = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <AppScreenContainer
      body={
        <PageContainer
          title="Experience"
          icon={<ExperienceIcon size="lg" />}
          pageBody={
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              {experienceList.map((experience, index) => (
                <Card
                  key={index}
                  body={
                    <div className="flex flex-col gap-5 items-center md:flex-row">
                      <div className="ring ring-accent ring-offset-base-200 ring-offset-4">
                        <img
                          className="w-32 h-32 min-w-32 min-h-32"
                          src={experience.logo}
                        />
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
                  }
                />
              ))}
            </div>
          }
        />
      }
    />
  );
};
