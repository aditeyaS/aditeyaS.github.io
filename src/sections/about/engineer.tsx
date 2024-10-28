import React from "react";
import { Quote } from "../../icons";
import { MagneticLinks } from "./magnetic-links";
import { motion } from "framer-motion";
import { TXT2 } from "../../components/ui";
import { DESCRIPTION_ENGINEER, LINKS_ENGINEER, QUOTE_ENGINEER } from "./data";

export const Engineer: React.FC = () => {
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
          {QUOTE_ENGINEER.text}
        </blockquote>
        <TXT2>— {QUOTE_ENGINEER.author}</TXT2>
      </div>
      <span>{DESCRIPTION_ENGINEER}</span>
      <div className="flex gap-2">
        {LINKS_ENGINEER.map((v, index) => (
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
