import React, { forwardRef } from "react";
import { motion } from "framer-motion";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  sectionIndex?: number;
}

export const SectionContainer = forwardRef<
  HTMLDivElement,
  SectionContainerProps
>(({ sectionIndex = 0, children }, ref) => {
  return (
    <motion.section
      className="p-4 lg:p-8 rounded-xl bg-background-2 border border-background-3 opacity-95 z-10"
      initial={{
        scale: 0.9,
        rotate: sectionIndex % 2 === 0 ? 1 : -1,
      }}
      whileInView={{
        scale: 1,
        rotate: 0,
      }}
      viewport={{ amount: 0.1 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      ref={ref}
    >
      {children}
    </motion.section>
  );
});

SectionContainer.displayName = "SectionContainer";
