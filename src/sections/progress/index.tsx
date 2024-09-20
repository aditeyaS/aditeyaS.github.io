import { motion, MotionValue, useSpring } from "framer-motion";
import React from "react";

interface ProgressProps {
  scrollYProgress: MotionValue<number>;
}

export const Progress: React.FC<ProgressProps> = ({ scrollYProgress }) => {
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  });

  return (
    <motion.div
      className="h-3 bg-primary fixed top-0 left-0 right-0 z-50"
      style={{ scaleX }}
    />
  );
};
