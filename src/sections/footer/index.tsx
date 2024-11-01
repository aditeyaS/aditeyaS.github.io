import React from "react";
import { GitHub, LinkedIn, Twitter } from "../../icons";
import {
  USER_GITHUB_URL,
  USER_LINKEDIN_URL,
  USER_TWITTER_URL,
} from "../../user-data";
import { MagneticHover } from "../../components/layout/magnetic-hover";

export const Footer: React.FC = () => {
  const date = new Date();
  return (
    <footer className="flex flex-col items-center gap-2 py-4 lg:py-8">
      <span className="font-thin z-10">
        &copy; Aditeya Srivastava, {date.getFullYear()}
      </span>
      <div className="flex gap-3">
        <a href={USER_LINKEDIN_URL} target="_blank" className="cursor-pointer">
          <MagneticHover>
            <LinkedIn />
          </MagneticHover>
        </a>
        <a href={USER_GITHUB_URL} target="_blank" className="cursor-pointer">
          <MagneticHover>
            <GitHub />
          </MagneticHover>
        </a>
        <a href={USER_TWITTER_URL} target="_blank" className="cursor-pointer">
          <MagneticHover>
            <Twitter />
          </MagneticHover>
        </a>
      </div>
    </footer>
  );
};
