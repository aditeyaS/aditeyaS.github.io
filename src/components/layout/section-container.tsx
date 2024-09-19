import React from "react";
import { motion } from "framer-motion";

interface SectionContainerProps {
  children: React.ReactNode;
  sectionIndex?: number;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  sectionIndex = 0,
  children,
}) => {
  return (
    <motion.section
      className="p-2 lg:p-4 rounded bg-foreground/10 hover:shadow hover:shadow-foreground/20"
      initial={{
        rotate: sectionIndex % 2 === 0 ? 1 : -1,
        x: sectionIndex % 2 === 0 ? 10 : -10,
      }}
      whileInView={{
        rotate: 0,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      {children}
    </motion.section>
  );
};
