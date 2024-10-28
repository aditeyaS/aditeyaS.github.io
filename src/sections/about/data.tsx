import { Email, GitHub, LeetCode, LinkedIn, Resume } from "../../icons";
import {
  USER_EMAIL,
  USER_GITHUB_URL,
  USER_LEETCODE_LINK,
  USER_LINKEDIN_URL,
  USER_RESUME_URL,
} from "../../user-data";

type Quote = {
  author: string;
  text: string;
};

type Link = {
  icon: React.ReactNode;
  link: string;
  color: string;
};

// anyone
export const QUOTE_ANYONE: Quote = {
  author: "Michael Jackson",
  text: "Always believe in yourself. No matter who’s around you being negative or thrusting negative energy at you, totally block it off. Because whatever you believe, you become.",
};

// recruiter
export const DESCRIPTION_RECRUITER: string =
  "Full Stack Developer with experience in building scalable web applications and serverless architectures using AWS, React, and various back-end frameworks.";
export const KEY_POINTS_RECRUITER: string[] = [
  "2+ years of experience as Software Engineer",
  "Masters in Computer Science",
  "Open to relocation",
  "Python, Java, React, AWS, Angular, TypeScript, JavaScript, HTML, CSS",
];
export const LINKS_RECRUITER: Link[] = [
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

// manager
export const QUOTE_MANAGER: Quote = {
  author: "John Carmack",
  text: "The cost of adding a feature isn’t just the time it takes to code it. The cost also includes the addition of an obstacle to future expansion. The trick is to pick the features that don’t fight each other.",
};
export const DESCRIPTION_MANAGER: string =
  "Driven by a blend of technical expertise and leadership, I’ve led teams to build efficient, user-centered solutions while improving processes and performance across web and mobile platforms.";
export const KEY_POINTS_MANAGER: string[] = [
  "Teamwork and Collaboration",
  "Continuous Learning and Improvement",
  "Work Ethic",
  "Adaptability and Flexibility",
  "Integrity",
];
export const LINKS_MANAGER: Link[] = [
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

// engineer
export const QUOTE_ENGINEER: Quote = {
  author: "John Woods",
  text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
};
export const DESCRIPTION_ENGINEER: string =
  " From optimizing RESTful APIs to automating workflows with Python scripts, I’m always in pursuit of cleaner code, faster systems, and pushing variables to their limits to create powerful applications.";
export const LINKS_ENGINEER: Link[] = [
  {
    icon: <Resume />,
    link: USER_RESUME_URL,
    color: "#4285F4",
  },
  {
    icon: <GitHub />,
    link: USER_GITHUB_URL,
    color: "",
  },
  {
    icon: <LeetCode />,
    link: USER_LEETCODE_LINK,
    color: "#FFA116",
  },
];
