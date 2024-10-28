import React from "react";
import { SectionContainer } from "../../components/layout/section-container";
import { getMonthName } from "../../lib/utils";
import { H1, H2, TXT, TXT2 } from "../../components/ui";
import { Icon } from "./icon";

import ClemsonLogo from "../../assets/education/clemson.png";
import AktuLogo from "../../assets/education/aktu.png";
import SectionProps from "../../types/section-props";
import { useAppScroll } from "../app-scroll-context";

type EducationType = {
  degree: string;
  logo: string;
  institute: string;
  instituteLink: string;
  from: Date;
  to: Date;
  location: string;
};
const educationList: EducationType[] = [
  {
    degree: "MS, Computer Science",
    logo: ClemsonLogo,
    institute: "Clemson University",
    instituteLink: "https://www.clemson.edu/",
    from: new Date(2022, 7),
    to: new Date(2024, 4),
    location: "Clemson, SC 🇺🇸",
  },
  {
    degree: "BS, Computer Science",
    logo: AktuLogo,
    institute: "Dr. APJ Abdul Kalam Technical University",
    instituteLink: "https://aktu.ac.in/",
    from: new Date(2017, 7),
    to: new Date(2021, 4),
    location: "Lucknow, UP 🇮🇳",
  },
];

export const Education: React.FC<SectionProps> = ({ sectionIndex }) => {
  const { appSectionRefs } = useAppScroll();

  return (
    <SectionContainer
      sectionIndex={sectionIndex}
      ref={appSectionRefs.education}
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center text-foreground-2">
          <Icon />
          <H1>Education</H1>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {educationList.map((education, index) => {
            const fromMonth = education.from.getMonth();
            const fromYear = education.from.getFullYear();
            const fromString = `${getMonthName(fromMonth)}, ${fromYear}`;
            const toMonth = education.to.getMonth();
            const toYear = education.to.getFullYear();
            const toString = `${getMonthName(toMonth)}, ${toYear}`;
            return (
              <div
                key={`education-${index}`}
                className="flex gap-2 p-0.5 lg:p-2 rounded-xl hover:bg-background-3"
              >
                <img className="w-12 h-12" srcSet={education.logo} />
                <div className="flex flex-col">
                  <H2>{education.degree}</H2>
                  <a
                    className="hover:underline"
                    target="_blank"
                    href={education.instituteLink}
                  >
                    <TXT>{education.institute}</TXT>
                  </a>
                  <TXT2>{`${fromString} - ${toString}`}</TXT2>
                  <TXT2>{education.location}</TXT2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};
