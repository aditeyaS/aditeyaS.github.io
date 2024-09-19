import React from "react";
import {
  USER_GITHUB_URL,
  USER_LEETCODE_LINK,
  USER_RESUME_URL,
} from "../../user-data";
import { GitHub, LeetCode, Resume } from "../../icons";
import { MagneticLinks } from "./magnetic-links";

type Link = {
  icon: React.ReactNode;
  link: string;
  color: string;
};

const engineerLinks: Link[] = [
  {
    icon: <Resume />,
    link: USER_RESUME_URL,
    color: "#4285F4",
  },
  {
    icon: <GitHub />,
    link: USER_GITHUB_URL,
    color: "",
  },
  {
    icon: <LeetCode />,
    link: USER_LEETCODE_LINK,
    color: "#FFA116",
  },
];

export const Engineer: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <span>
        From optimizing RESTful APIs to automating workflows with Python
        scripts, I’m always in pursuit of cleaner code, faster systems, and
        pushing variables to their limits to create powerful applications.
      </span>
      <div className="flex gap-2">
        {engineerLinks.map((v, index) => (
          <MagneticLinks
            key={`engineer-link-${index}`}
            icon={v.icon}
            color={v.color}
            link={v.link}
          />
        ))}
      </div>
    </div>
  );
};
