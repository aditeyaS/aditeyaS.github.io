import React from "react";
import { TXT } from "../../components/ui";
import { MagneticLinks } from "./magnetic-links";
import { motion } from "framer-motion";
import {
  DESCRIPTION_RECRUITER,
  KEY_POINTS_RECRUITER,
  LINKS_RECRUITER,
} from "./data";

export const Recruiter: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <TXT>{DESCRIPTION_RECRUITER}</TXT>
      <ul className="list-disc list-inside">
        {KEY_POINTS_RECRUITER.map((text, index) => (
          <li key={`recruiter-key-point-${index}`}>
            <TXT>{text}</TXT>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        {LINKS_RECRUITER.map((v, index) => (
          <MagneticLinks
            key={`recruiter-link-${index}`}
            icon={v.icon}
            color={v.color}
            link={v.link}
          />
        ))}
      </div>
    </motion.div>
  );
};
