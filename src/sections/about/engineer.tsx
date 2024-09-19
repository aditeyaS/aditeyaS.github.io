import React from "react";
import {
  USER_GITHUB_URL,
  USER_LEETCODE_LINK,
  USER_RESUME_URL,
} from "../../user-data";
import { GitHub, LeetCode, Resume } from "../../icons";

export const Engineer: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <span>
        From optimizing RESTful APIs to automating workflows with Python
        scripts, I’m always in pursuit of cleaner code, faster systems, and
        pushing variables to their limits to create powerful applications.
      </span>
      <div className="flex gap-2">
        <a
          href={USER_RESUME_URL}
          target="_blank"
          className="text-[#4285F4] cursor-pointer p-1.5 rounded-full bg-foreground/10 hover:bg-background"
        >
          <Resume />
        </a>
        <a
          href={USER_GITHUB_URL}
          target="_blank"
          className="cursor-pointer p-1.5 rounded-full bg-foreground/10 hover:bg-background"
        >
          <GitHub />
        </a>
        <a
          href={USER_LEETCODE_LINK}
          target="_blank"
          className="text-[#FFA116] cursor-pointer p-1.5 rounded-full bg-foreground/10 hover:bg-background"
        >
          <LeetCode />
        </a>
      </div>
    </div>
  );
};
