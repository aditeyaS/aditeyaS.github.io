import React from "react";
import { TXT, TXT2 } from "../../components/ui";
import { Quote } from "../../icons";
import { MagneticLinks } from "./magnetic-links";
import { motion } from "framer-motion";
import {
  DESCRIPTION_MANAGER,
  KEY_POINTS_MANAGER,
  LINKS_MANAGER,
  QUOTE_MANAGER,
} from "./data";

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
          {QUOTE_MANAGER.text}
        </blockquote>
        <TXT2>— {QUOTE_MANAGER.author}</TXT2>
      </div>
      <TXT>{DESCRIPTION_MANAGER}</TXT>
      <div>
        <TXT>My values</TXT>
        <ul className="list-disc list-inside">
          {KEY_POINTS_MANAGER.map((text, index) => (
            <li key={`manager-key-point-${index}`}>
              <TXT>{text}</TXT>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        {LINKS_MANAGER.map((v, index) => (
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
