import React from "react";
import { GitHub, LinkedIn, Twitter } from "../../icons";
import {
  USER_GITHUB_URL,
  USER_LINKEDIN_URL,
  USER_TWITTER_URL,
} from "../../user-data";

export const Footer: React.FC = () => {
  const date = new Date();
  return (
    <footer className="flex flex-col items-center gap-2 py-2 lg:py-4">
      <span className="font-thin">
        &copy; Aditeya Srivastava, {date.getFullYear()}
      </span>
      <div className="flex gap-2 ">
        <a href={USER_LINKEDIN_URL} target="_blank" className="cursor-pointer">
          <LinkedIn />
        </a>
        <a href={USER_GITHUB_URL} target="_blank" className="cursor-pointer">
          <GitHub />
        </a>
        <a href={USER_TWITTER_URL} target="_blank" className="cursor-pointer">
          <Twitter />
        </a>
      </div>
    </footer>
  );
};
