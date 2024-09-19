import React from "react";
import { getMonthName } from "../../lib/utils";
import ClemsonLogo from "../../assets/education/clemson.png";
import AktuLogo from "../../assets/education/aktu.png";
import { SectionContainer } from "../../components/layout/section-container";
import { H1, H2, TXT, TXT2 } from "../../components/ui";
import { Icon } from "./icon";

type EducationType = {
  degree: string;
  logo: string;
  institute: string;
  instituteLink: string;
  from: Date;
  to: Date;
  location: string;
  locationCountry: string;
};

export const Education: React.FC = () => {
  const experienceList: EducationType[] = [
    {
      degree: "MS, Computer Science",
      logo: ClemsonLogo,
      institute: "Clemson University",
      instituteLink: "",
      from: new Date(2022, 7),
      to: new Date(2024, 4),
      location: "Clemson, SC",
      locationCountry: "🇺🇸",
    },
    {
      degree: "BS, Computer Science",
      logo: AktuLogo,
      institute: "Dr. APJ Abdul Kalam Technical University",
      instituteLink: "",
      from: new Date(2017, 7),
      to: new Date(2021, 4),
      location: "Lucknow, UP",
      locationCountry: "🇮🇳",
    },
  ];
  return (
    <SectionContainer sectionIndex={4}>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Icon />
          <H1>Education</H1>
        </div>
        <div className="flex flex-col gap-2">
          {experienceList.map((experience, index) => {
            const fromMonth = experience.from.getMonth();
            const fromYear = experience.from.getFullYear();
            const fromString = `${getMonthName(fromMonth)}, ${fromYear}`;
            const toMonth = experience.to.getMonth();
            const toYear = experience.to.getFullYear();
            const toString = `${getMonthName(toMonth)}, ${toYear}`;

            return (
              <div key={`experience-${index}`} className="flex gap-2">
                <img className="w-12 h-12" srcSet={experience.logo} />
                <div>
                  <H2>{experience.degree}</H2>
                  <div className="flex gap-1">
                    <a
                      className="hover:underline"
                      target="_blank"
                      href={experience.instituteLink}
                    >
                      <TXT>{experience.institute}</TXT>
                    </a>
                  </div>
                  <TXT2>{`${fromString} - ${toString}`}</TXT2>

                  <div className="flex gap-1 items-center">
                    <TXT2>
                      {experience.location + " " + experience.locationCountry}
                    </TXT2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};
