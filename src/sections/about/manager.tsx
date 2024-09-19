import React from "react";
import { TXT } from "../../components/ui";
import {
  USER_EMAIL,
  USER_LINKEDIN_URL,
  USER_RESUME_URL,
} from "../../user-data";
import { Email, LinkedIn, Resume } from "../../icons";
import { MagneticLinks } from "./magnetic-links";

type Link = {
  icon: React.ReactNode;
  link: string;
  color: string;
};

const managerLinks: Link[] = [
  {
    icon: <Resume />,
    link: USER_RESUME_URL,
    color: "#4285F4",
  },
  {
    icon: <LinkedIn />,
    link: USER_LINKEDIN_URL,
    color: "#0e76a8",
  },
  {
    icon: <Email />,
    link: `mailto:${USER_EMAIL}`,
    color: "#c71610",
  },
];

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
        {managerLinks.map((v, index) => (
          <MagneticLinks
            key={`manager-link-${index}`}
            icon={v.icon}
            color={v.color}
            link={v.link}
          />
        ))}
      </div>
    </div>
  );
};
