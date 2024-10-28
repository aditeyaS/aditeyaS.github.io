import { motion, MotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Logo } from "./logo";
import { SearchCommandDialog } from "./search-command-dialog";
import { ThemeDialog } from "./theme-dialog";

interface TopNavProps {
  scrollYProgress: MotionValue<number>;
}

export const TopNav: React.FC<TopNavProps> = ({ scrollYProgress }) => {
  const [isMac, setIsMac] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  });

  useEffect(() => {
    setIsMac(navigator.userAgent.toUpperCase().includes("MAC"));
  }, []);

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowSearch((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div
      id="app-top-nav"
      className="fixed top-0 left-0 right-0 z-50 h-14 bg-background-2"
    >
      <div className="px-2 lg:px-36 py-2 h-12 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <button
            className="hover:bg-background-3 p-1 rounded"
            onClick={scrollToTop}
          >
            <Logo />
          </button>
          <button
            className="bg-background-3 px-2 py-1 rounded text-sm flex items-center text-foreground-2"
            onClick={() => setShowSearch(true)}
          >
            <svg
              className="w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <p className="ml-2 mr-10 cursor-text">Search...</p>
            <kbd className="bg-background px-1 rounded">
              {isMac ? "⌘" : "⌃"}K
            </kbd>
          </button>
        </div>
        <ThemeDialog />
      </div>
      <motion.div className="h-2 bg-primary " style={{ scaleX }} />
      <SearchCommandDialog
        show={showSearch}
        onClose={() => setShowSearch(false)}
      />
    </div>
  );
};
