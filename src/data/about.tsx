import Contact from "@/types/contact";
import Hobby from "@/types/hobby";
import Quote from "@/types/quote";
import {
  Camera,
  Dumbbell,
  Mountain,
  Music,
  PlaneTakeoff,
  Tv,
  File,
} from "lucide-react";
import USER from "./user";
import Linkedin from "@/components/icons/linkedin";
import { SiGithub, SiLeetcode } from "@icons-pack/react-simple-icons";

export const QUOTE_ANYONE: Quote = {
  quote:
    "Always believe in yourself. No matter who’s around you being negative or thrusting negative energy at you, totally block it off. Because whatever you believe, you become.",
  author: "Michael Jackson",
};
export const HOBBIES: Hobby[] = [
  {
    name: "Hiking",
    icon: <Mountain />,
  },
  {
    name: "Music",
    icon: <Music />,
  },
  {
    name: "Travel",
    icon: <PlaneTakeoff />,
  },
  {
    name: "Gym",
    icon: <Dumbbell />,
  },
  {
    name: "Photography",
    icon: <Camera />,
  },
  {
    name: "Entertainment",
    icon: <Tv />,
  },
];

export const DESCRIPTION_RECRUITER: string =
  "Full Stack Developer with experience in building scalable web applications and serverless architectures using AWS, React, and various back-end frameworks.";
export const KEY_POINTS_RECRUITER: string[] = [
  "2+ years of experience as Software Engineer",
  "Masters in Computer Science",
  "Open to relocation",
  "Python, Java, React, AWS, Angular, TypeScript, JavaScript, HTML, CSS",
];
export const LINKS_RECRUITER: Contact[] = [
  {
    title: "Resume",
    url: USER.resumeUrl,
    icon: <File />,
  },
  {
    title: "Linkedin",
    url: USER.social.linkedin,
    icon: <Linkedin />,
  },
];

export const QUOTE_MANAGER: Quote = {
  author: "John Carmack",
  quote:
    "The cost of adding a feature isn’t just the time it takes to code it. The cost also includes the addition of an obstacle to future expansion. The trick is to pick the features that don’t fight each other.",
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
export const LINKS_MANAGER: Contact[] = [
  {
    icon: <File />,
    url: USER.resumeUrl,
    title: "Resume",
  },
  {
    icon: <Linkedin />,
    url: USER.social.linkedin,
    title: "Linkedin",
  },
];

export const QUOTE_ENGINEER: Quote = {
  author: "John Woods",
  quote:
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
};
export const DESCRIPTION_ENGINEER: string =
  " From optimizing RESTful APIs to automating workflows with Python scripts, I’m always in pursuit of cleaner code, faster systems, and pushing variables to their limits to create powerful applications.";
export const LINKS_ENGINEER: Contact[] = [
  {
    icon: <File />,
    url: USER.resumeUrl,
    title: "Resume",
  },
  {
    icon: <SiGithub />,
    url: USER.github.url,
    title: "Github",
  },
  {
    icon: <SiLeetcode />,
    url: USER.leetcode,
    title: "Leetcode",
  },
];
