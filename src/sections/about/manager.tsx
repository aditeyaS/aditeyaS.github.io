import React from "react";
import { TXT } from "../../components/ui";
import {
  USER_EMAIL,
  USER_LINKEDIN_URL,
  USER_RESUME_URL,
} from "../../user-data";
import { Copy } from "../../icons";

export const Manager: React.FC = () => {
  const onCopyEmail = () => {
    navigator.clipboard.writeText(USER_EMAIL);
  };
  return (
    <div className="flex flex-col gap-2">
      <TXT>
        Driven by a blend of technical expertise and leadership, I’ve led teams
        to build efficient, user-centered solutions while improving processes
        and performance across web and mobile platforms.
      </TXT>
      <div>
        <TXT>My values</TXT>
        <ul className="list-disc list-inside">
          <li>
            <TXT>Teamwork and Collaboration</TXT>
          </li>
          <li>
            <TXT>Continuous Learning and Improvement</TXT>
          </li>
          <li>
            <TXT>Work Ethic</TXT>
          </li>
          <li>
            <TXT>Adaptability and Flexibility</TXT>
          </li>
          <li>
            <TXT>Integrity</TXT>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <a
          href={USER_RESUME_URL}
          target="_blank"
          className="underline underline-offset-4 hover:text-primary cursor-pointer"
        >
          <TXT>Resume</TXT>
        </a>
        <a
          href={USER_LINKEDIN_URL}
          target="_blank"
          className="underline underline-offset-4 hover:text-primary cursor-pointer"
        >
          <TXT>LinkedIn</TXT>
        </a>
        <div className="flex gap-1 items-center">
          <a
            href={`mailto:${USER_EMAIL}`}
            target="_blank"
            className="underline underline-offset-4 hover:text-primary cursor-pointer"
          >
            <TXT>Email</TXT>
          </a>
          <button
            className="hover:bg-foreground/30 p-1 rounded-full"
            onClick={onCopyEmail}
          >
            <Copy />
          </button>
        </div>
      </div>
    </div>
  );
};
