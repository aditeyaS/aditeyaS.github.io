import React from "react";
import { TXT } from "../../components/ui";
import { Email, LinkedIn, Resume } from "../../icons";
import {
  USER_EMAIL,
  USER_LINKEDIN_URL,
  USER_RESUME_URL,
} from "../../user-data";
import { MagneticLinks } from "./magnetic-links";

type Link = {
  icon: React.ReactNode;
  link: string;
  color: string;
};

const recruiterLinks: Link[] = [
  {
    icon: <Resume />,
    link: USER_RESUME_URL,
    color: "#4285F4",
  },
  {
    icon: <LinkedIn />,
    link: USER_LINKEDIN_URL,
    color: "#0e76a8",
  },
  {
    icon: <Email />,
    link: `mailto:${USER_EMAIL}`,
    color: "#c71610",
  },
];

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
        {recruiterLinks.map((v, index) => (
          <MagneticLinks
            key={`recruiter-link-${index}`}
            icon={v.icon}
            color={v.color}
            link={v.link}
          />
        ))}
      </div>
    </div>
  );
};
