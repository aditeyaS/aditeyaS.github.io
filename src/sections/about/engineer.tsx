import React from "react";
import {
  USER_GITHUB_URL,
  USER_LEETCODE_LINK,
  USER_RESUME_URL,
} from "../../user-data";
import { GitHub, LeetCode, Quote, Resume } from "../../icons";
import { MagneticLinks } from "./magnetic-links";
import { motion } from "framer-motion";
import { TXT2 } from "../../components/ui";

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
    <motion.div
      className="flex flex-col gap-2"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <div className="flex flex-col gap-1 border border-primary rounded-xl p-2 lg:p-4">
        <Quote />
        <blockquote className="font-code font-light">
          “Always believe in yourself. No matter who’s around you being negative
          or thrusting negative energy at you, totally block it off. Because
          whatever you believe, you become.”
        </blockquote>
        <TXT2>— Michael Jackson</TXT2>
      </div>
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
    </motion.div>
  );
};
