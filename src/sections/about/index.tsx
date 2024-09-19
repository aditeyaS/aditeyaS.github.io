import React, { useState } from "react";
import { SectionContainer } from "../../components/layout/section-container";
import { Chip, H1 } from "../../components/ui";
import { Icon } from "./icon";
import { Anyone } from "./anyone";
import { Recruiter } from "./recruiter";
import { Manager } from "./manager";
import { Engineer } from "./engineer";

export const About: React.FC = () => {
  const [viewerType, setViewerType] = useState<
    "anyone" | "recruiter" | "manager" | "engineer"
  >("anyone");

  return (
    <SectionContainer>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Icon />
          <H1>About</H1>
        </div>
        <div className="flex gap-1 text-xs items-center">
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
