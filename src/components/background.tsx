import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Background = () => {
  const backgroundRed = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <div ref={backgroundRed} className="fixed inset-0 h-screen w-screen">
      <motion.svg
        className="w-10 h-10 fixed left-0 top-0"
        variants={variants}
        animate="default"
        transition={{ type: "spring" }}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z"
          className="fill-primary/50"
        />
      </motion.svg>
      <motion.svg
        className="w-12 h-12 fixed left-0 top-0"
        variants={variants}
        animate="default"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z"
          className="fill-primary/40"
        />
      </motion.svg>
      <motion.svg
        className="w-8 h-8 fixed left-0 top-0"
        variants={variants}
        animate="default"
        transition={{ type: "tween" }}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z"
          className="fill-primary/30"
        />
      </motion.svg>
    </div>
  );
};
