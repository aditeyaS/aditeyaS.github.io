import React from "react";
import { GitHub, LinkedIn, Twitter } from "../../icons";

export const Footer: React.FC = () => {
  const date = new Date();
  return (
    <footer className="flex flex-col items-center gap-2 py-2 lg:py-4">
      <span className="font-thin">
        &copy; Aditeya Srivastava, {date.getFullYear()}
      </span>
      <div className="flex gap-2 ">
        <a
          href="https://www.linkedin.com/in/aditeya"
          target="_blank"
          className="cursor-pointer"
        >
          <LinkedIn />
        </a>
        <a
          href="https://www.github.com/aditeyaS"
          target="_blank"
          className="cursor-pointer"
        >
          <GitHub />
        </a>
        <a
          href="https://www.x.com/aditeyaaaa"
          target="_blank"
          className="cursor-pointer"
        >
          <Twitter />
        </a>
      </div>
    </footer>
  );
};
