import React from "react";
import { TXT } from "../../components/ui";
import {
  USER_EMAIL,
  USER_LINKEDIN_URL,
  USER_RESUME_URL,
} from "../../user-data";
import { Email, LinkedIn, Resume } from "../../icons";

export const Manager: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <TXT>
        Driven by a blend of technical expertise and leadership, I’ve led teams
        to build efficient, user-centered solutions while improving processes
        and performance across web and mobile platforms.
      </TXT>
      <div>
        <TXT>My values</TXT>
        <ul className="list-disc list-inside">
          <li>
            <TXT>Teamwork and Collaboration</TXT>
          </li>
          <li>
            <TXT>Continuous Learning and Improvement</TXT>
          </li>
          <li>
            <TXT>Work Ethic</TXT>
          </li>
          <li>
            <TXT>Adaptability and Flexibility</TXT>
          </li>
          <li>
            <TXT>Integrity</TXT>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <a
          href={USER_RESUME_URL}
          target="_blank"
          className="text-[#4285F4] cursor-pointer p-1.5 rounded-full bg-foreground/10 hover:bg-background"
        >
          <Resume />
        </a>
        <a
          href={USER_LINKEDIN_URL}
          target="_blank"
          className="text-[#0e76a8] cursor-pointer p-1.5 rounded-full bg-foreground/10 hover:bg-background"
        >
          <LinkedIn />
        </a>
        <a
          href={`mailto:${USER_EMAIL}`}
          target="_blank"
          className="text-[#c71610] cursor-pointer p-1.5 rounded-full bg-foreground/10 hover:bg-background"
        >
          <Email />
        </a>
      </div>
    </div>
  );
};
