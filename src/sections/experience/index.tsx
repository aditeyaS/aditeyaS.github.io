import React from "react";
import { getMonthName } from "../../lib/utils";
import CanesLogo from "../../assets/experience/canes.png";
import Gen3LearningLogo from "../../assets/experience/gen3learning.png";
import HashedInLogo from "../../assets/experience/hashedin.png";
import ClemsonLogo from "../../assets/experience/clemson.png";
import ERPLogo from "../../assets/experience/erp.png";
import { SectionContainer } from "../../components/layout/section-container";
import { H1, H2, TXT, TXT2 } from "../../components/ui";
import { Icon } from "./icon";
import { ExperienceDetails } from "./experience-detail";

type ExperienceType = {
  position: string;
  logo: string;
  positionType: "Part-time" | "Full-time" | "Internship";
  organization: string;
  organizationLink: string;
  from: Date;
  to: Date;
  location: string;
  locationCountry: string;
  locationType: "Remote" | "Hybrid" | "On-site";
  responsibilities: string[];
};

const experienceList: ExperienceType[] = [
  {
    position: "Full Stack Software Engineer Intern",
    logo: Gen3LearningLogo,
    positionType: "Part-time",
    organization: "Gen 3 Learning",
    organizationLink: "",
    from: new Date(2024, 6),
    to: new Date(),
    location: "Bloomington, IN",
    locationCountry: "🇺🇸",
    locationType: "Remote",
    responsibilities: [
      "Contributed to developing a scalable RESTful API using AWS Lambda, Amazon DynamoDB, and API Gateway, enhancing data retrieval and manipulation in a serverless architecture designed to handle thousands of daily requests.",
      "Assisted in front-end web development using React, focusing on building user-friendly interfaces, and participated in testing with Selenium to identify and reduce bugs, contributing to a smoother user experience.",
    ],
  },
  {
    position: "Graduate Teaching Assistant",
    positionType: "Part-time",
    logo: ClemsonLogo,
    organization: "Clemson University",
    organizationLink: "",
    from: new Date(2023, 0),
    to: new Date(2024, 4),
    location: "Clemson, SC",
    locationCountry: "🇺🇸",
    locationType: "Hybrid",
    responsibilities: [
      "Pioneered Python scripts to automate grading processes, reducing grading time by 20% and boosting efficiency.",
      "Reviewed and assessed over 200 assignments and projects across 3 courses while guiding 50+ students during office hours, contributing to improved student performance and a consistent grading process.",
    ],
  },
  {
    position: "Crew Member",
    positionType: "Part-time",
    logo: CanesLogo,
    organization: "Raising Cane's Chicken Fingers",
    organizationLink: "",
    from: new Date(2022, 7),
    to: new Date(2023, 7),
    location: "Clemson, SC",
    locationCountry: "🇺🇸",
    locationType: "On-site",
    responsibilities: [],
  },
  {
    position: "Software Engineer",
    positionType: "Full-time",
    logo: HashedInLogo,
    organization: "HashedIn by Deloitte",
    organizationLink: "",
    from: new Date(2021, 2),
    to: new Date(2022, 7),
    location: "Bengaluru, KA",
    locationCountry: "🇮🇳",
    locationType: "Hybrid",
    responsibilities: [
      "Developed an NLP and pattern recognition-based system using Angular (Typescript, Redux), identifying and redacting privacy elements, which improved compliance by 30%.",
      "Achieved 85% code coverage through unit testing (Jasmine and Karma) and automated testing (Cypress), leading to a 25% decrease in bugs. Integrated code into CI/CD pipelines, ensuring smooth operation and functionality.",
      "Effectively communicated with offshore teams to facilitate Agile sprint meetings and engaged with business users, resulting in a 15% increase in feature delivery speed.",
      "Awarded as the Top Impactor in Delivery Excellence for outstanding performance in the project.",
    ],
  },
  {
    position: "Full Stack Developer Intern",
    positionType: "Internship",
    logo: ERPLogo,
    organization: "Team ERP",
    organizationLink: "",
    from: new Date(2018, 5),
    to: new Date(2021, 1),
    location: "Ghaziabad, UP",
    locationCountry: "🇮🇳",
    locationType: "On-site",
    responsibilities: [
      "Developed KIET's in-house ERP system, supporting 8000+ active users.",
      "Streamlined AngularJS front end with 10+ feature additions and resolved 20+ critical bugs. Optimized Django backend code and enhanced MySQL database operations, leading to a 5% improvement in system performance.",
      "Initiated iOS mobile app development using React Native to support Apple users and added 4+ new modules to the Java Android app, focusing on UI/UX design to increase user support and functionality.",
      "Elected as Team President by 4 seniors for exemplary leadership and collaborative skills, leading a team of 16 developers, and successfully managing 3 key projects.",
    ],
  },
];

export const Experience: React.FC = () => {
  const todaysDate = new Date();

  return (
    <SectionContainer>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Icon />
          <H1>Experience</H1>
        </div>

        <div className="flex flex-col gap-2">
          {experienceList.map((experience, index) => {
            const fromMonth = experience.from.getMonth();
            const fromYear = experience.from.getFullYear();
            const fromString = `${getMonthName(fromMonth)}, ${fromYear}`;
            const toMonth = experience.to.getMonth();
            const toYear = experience.to.getFullYear();
            const toString =
              toMonth === todaysDate.getMonth() &&
              toYear === todaysDate.getFullYear()
                ? "Present"
                : `${getMonthName(toMonth)}, ${toYear}`;

            let diffMonths = (toYear - fromYear) * 12 + (toMonth - fromMonth);
            let diffString = "";
            if (diffMonths >= 12) {
              diffString = diffString + Math.floor(diffMonths / 12) + "y";
              diffMonths = diffMonths % 12;
            }
            if (diffMonths != 0) {
              diffString = diffString + " " + diffMonths + "m";
            }
            return (
              <div key={`experience-${index}`} className="flex gap-2">
                <img className="w-12 h-12" srcSet={experience.logo} />
                <div className="grow">
                  <H2>{experience.position}</H2>
                  <div className="flex gap-1">
                    <a
                      className="hover:underline"
                      target="_blank"
                      href={experience.organizationLink}
                    >
                      <TXT>{experience.organization}</TXT>
                    </a>
                    <TXT>•</TXT>
                    <TXT>{experience.positionType}</TXT>
                  </div>
                  <div className="flex gap-1">
                    <TXT2>{`${fromString} - ${toString}`}</TXT2>
                    <TXT2>•</TXT2>
                    <TXT2>{diffString}</TXT2>
                  </div>
                  <div className="flex gap-1 items-center">
                    <TXT2>{experience.location}</TXT2>
                    <TXT2>{experience.locationCountry}</TXT2>
                    <TXT2>•</TXT2>
                    <TXT2>{experience.locationType}</TXT2>
                  </div>
                  {experience.responsibilities.length !== 0 && (
                    <ExperienceDetails list={experience.responsibilities} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};
