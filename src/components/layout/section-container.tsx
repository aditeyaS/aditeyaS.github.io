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
      className="p-2 lg:p-4 rounded-xl bg-foreground/10 hover:shadow hover:shadow-foreground/20"
      initial={{
        scale: 0.9,
        rotate: sectionIndex % 2 === 0 ? 1 : -1,
      }}
      whileInView={{
        scale: 1,
        rotate: 0,
      }}
      viewport={{ amount: 0.2 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};
