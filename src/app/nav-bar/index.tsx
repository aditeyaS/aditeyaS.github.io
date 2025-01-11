import { useEffect, useState } from "react";
import { motion, MotionValue, useSpring } from "framer-motion";
import { Search } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SearchCommandDialog } from "./search-command-dialog";
import { ThemeDialog } from "./theme-dialog";

interface Props {
  scrollYProgress: MotionValue<number>;
}
export function NavBar({ scrollYProgress }: Props) {
  const [isMac, setIsMac] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  });

  useEffect(() => {
    setIsMac(navigator.userAgent.toUpperCase().includes("MAC"));
  }, []);

  function scrollToTop() {
    window.scroll({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    function down(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowSearch((open) => !open);
      }
    }
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div
      id="app-top-nav"
      className="fixed top-0 left-0 right-0 z-50 h-14 bg-background border-b"
    >
      <div className="px-2 lg:px-6 py-2 h-12 flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Button
            className="[&_svg]:size-6"
            variant={"ghost"}
            size={"icon"}
            onClick={scrollToTop}
          >
            <Logo className="text-primary" />
          </Button>
          <Button
            className="text-muted-foreground"
            variant={"outline"}
            onClick={() => setShowSearch(true)}
          >
            <Search className="size-4" />
            <p className="ml-2 mr-10 cursor-text">Search...</p>
            <kbd className="bg-muted px-2 rounded text-sm font-semibold">
              {isMac ? "⌘" : "⌃"}K
            </kbd>
          </Button>
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
}
