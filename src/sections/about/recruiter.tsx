import React from "react";
import { TXT } from "../../components/ui";
import { Copy } from "../../icons";
import {
  USER_EMAIL,
  USER_LINKEDIN_URL,
  USER_RESUME_URL,
} from "../../user-data";

export const Recruiter: React.FC = () => {
  const onCopyEmail = () => {
    navigator.clipboard.writeText(USER_EMAIL);
  };

  return (
    <div className=" flex flex-col gap-2">
      <TXT>
        Full Stack Developer with experience in building scalable web
        applications and serverless architectures using AWS, React, and various
        back-end frameworks.
      </TXT>
      <ul className="list-disc list-inside">
        <li>
          <TXT>2+ years of experience as Software Engineer</TXT>
        </li>
        <li>
          <TXT>Masters in Computer Science</TXT>
        </li>
        <li>
          <TXT>Open to relocation</TXT>
        </li>
        <li>
          <TXT>
            Python, Java, React, AWS, Angular, TypeScript, JavaScript, HTML, CSS
          </TXT>
        </li>
      </ul>
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
