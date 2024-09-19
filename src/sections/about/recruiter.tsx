import React from "react";
import { TXT } from "../../components/ui";
import { Email, LinkedIn, Resume } from "../../icons";
import {
  USER_EMAIL,
  USER_LINKEDIN_URL,
  USER_RESUME_URL,
} from "../../user-data";

export const Recruiter: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
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
      <div className="flex gap-2">
        <a
          href={USER_RESUME_URL}
          target="_blank"
          className="text-[#4285F4] cursor-pointer p-1.5 rounded-full bg-foreground/10 hover:bg-background"
        >
          <Resume />
        </a>
        <a
          href={USER_LINKEDIN_URL}
          target="_blank"
          className="text-[#0e76a8] cursor-pointer p-1.5 rounded-full bg-foreground/10 hover:bg-background"
        >
          <LinkedIn />
        </a>
        <a
          href={`mailto:${USER_EMAIL}`}
          target="_blank"
          className="text-[#c71610] cursor-pointer p-1.5 rounded-full bg-foreground/10 hover:bg-background"
        >
          <Email />
        </a>
      </div>
    </div>
  );
};
