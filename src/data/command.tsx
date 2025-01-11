import Linkedin from "@/components/icons/linkedin";
import { CommandLink, CommandSection } from "@/types/command";
import {
  BookOpen,
  Briefcase,
  Code,
  Contact,
  File,
  Info,
  Mail,
  PanelsTopLeft,
  UserCircle,
} from "lucide-react";
import USER from "./user";
import { SiGithub, SiLeetcode, SiX } from "@icons-pack/react-simple-icons";

export const COMMAND_SECTIONS: CommandSection[] = [
  {
    name: "Introduction",
    icon: <UserCircle />,
    section: "introduction",
  },
  {
    name: "About",
    icon: <Info />,
    section: "about",
  },
  {
    name: "Experience",
    icon: <Briefcase />,
    section: "experience",
  },
  {
    name: "Projects",
    icon: <PanelsTopLeft />,
    section: "projects",
  },
  {
    name: "Education",
    icon: <BookOpen />,
    section: "education",
  },
  {
    name: "Skills",
    icon: <Code />,
    section: "skills",
  },
  {
    name: "Contact",
    icon: <Contact />,
    section: "contact",
  },
];

export const COMMAND_LINKS: CommandLink[] = [
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    url: USER.social.linkedin,
  },
  {
    name: "Resume",
    icon: <File />,
    url: USER.resumeUrl,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    url: USER.github.url,
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    url: USER.leetcode,
  },
  {
    name: "Twitter (X)",
    icon: <SiX />,
    url: USER.social.twitter,
  },
  {
    name: "Email",
    icon: <Mail />,
    url: `mailto:${USER.email}`,
  },
];
