import React from "react";
import { getMonthName } from "../../lib/utils";
import { SectionContainer } from "../../components/layout/section-container";
import { H1, H2, TXT, TXT2 } from "../../components/ui";
import { Icon } from "./icon";
import { ExperienceDetails } from "./experience-detail";
import SectionProps from "../../types/section-props";
import { useAppScroll } from "../app-scroll-context";
import { EXPERIENCE_LIST } from "./data";

export const Experience: React.FC<SectionProps> = ({ sectionIndex }) => {
  const todaysDate = new Date();
  const { appSectionRefs } = useAppScroll();

  return (
    <SectionContainer
      sectionIndex={sectionIndex}
      ref={appSectionRefs.experience}
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center text-foreground-2">
          <Icon />
          <H1>Experience</H1>
        </div>

        <div className="flex flex-col gap-2">
          {EXPERIENCE_LIST.map((experience, index) => {
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
              <div
                key={`experience-${index}`}
                className="flex gap-2 p-0.5 lg:p-2 rounded-xl hover:bg-background-3"
              >
                <img className="w-12 h-12" srcSet={experience.logo} />
                <div className="grow">
                  <H2>{experience.position}</H2>
                  <div className="flex gap-1 flex-wrap">
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
