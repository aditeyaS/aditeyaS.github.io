import React, { useState } from "react";
import { SectionContainer } from "../../components/layout/section-container";
import { Chip, H1 } from "../../components/ui";
import { Icon } from "./icon";
import { Anyone } from "./anyone";
import { Recruiter } from "./recruiter";
import { Manager } from "./manager";
import { Engineer } from "./engineer";
import SectionProps from "../../types/section-props";
import { useAppScroll } from "../app-scroll-context";

export const About: React.FC<SectionProps> = ({ sectionIndex }) => {
  const { appSectionRefs } = useAppScroll();

  const [viewerType, setViewerType] = useState<
    "anyone" | "recruiter" | "manager" | "engineer"
  >("anyone");

  return (
    <SectionContainer sectionIndex={sectionIndex} ref={appSectionRefs.about}>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center text-foreground-2">
          <Icon />
          <H1>About</H1>
        </div>
        <div className="flex gap-1 items-center flex-wrap">
          <span>For</span>
          <Chip
            onClick={() => setViewerType("anyone")}
            selected={viewerType === "anyone"}
          >
            anyone
          </Chip>
          <Chip
            onClick={() => setViewerType("recruiter")}
            selected={viewerType === "recruiter"}
          >
            recruiter
          </Chip>
          <Chip
            onClick={() => setViewerType("manager")}
            selected={viewerType === "manager"}
          >
            manager
          </Chip>
          <Chip
            onClick={() => setViewerType("engineer")}
            selected={viewerType === "engineer"}
          >
            engineer
          </Chip>
        </div>
        {viewerType === "anyone" && <Anyone />}
        {viewerType === "recruiter" && <Recruiter />}
        {viewerType === "manager" && <Manager />}
        {viewerType === "engineer" && <Engineer />}
      </div>
    </SectionContainer>
  );
};
