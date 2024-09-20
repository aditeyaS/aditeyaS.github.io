import React from "react";
import { TXT, TXT2 } from "../../components/ui";
import {
  USER_EMAIL,
  USER_LINKEDIN_URL,
  USER_RESUME_URL,
} from "../../user-data";
import { Email, LinkedIn, Quote, Resume } from "../../icons";
import { MagneticLinks } from "./magnetic-links";
import { motion } from "framer-motion";

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
    <motion.div
      className="flex flex-col gap-2"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <div className="flex flex-col gap-1 border-l border-primary px-1 lg:px-2">
        <Quote />
        <blockquote className="font-code font-light">
          “The cost of adding a feature isn’t just the time it takes to code it.
          The cost also includes the addition of an obstacle to future
          expansion. The trick is to pick the features that don’t fight each
          other.”
        </blockquote>
        <TXT2>— John Carmack</TXT2>
      </div>
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
    </motion.div>
  );
};
