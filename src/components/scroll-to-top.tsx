import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <Button
      className="z-10 fixed right-8 bottom-8"
      style={{ display: visible ? "flex" : "none" }}
      size={"sm"}
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <ChevronUp /> Back to top
    </Button>
  );
};
