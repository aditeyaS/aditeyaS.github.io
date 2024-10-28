import { Icon as AboutIcon } from "../about/icon";
import { Icon as ExperienceIcon } from "../experience/icon";
import { Icon as SkillsIcon } from "../skills/icon";
import { Icon as ProjectsIcon } from "../projects/icon";
import { Icon as EducationIcon } from "../education/icon";
import {
  Email,
  GitHub,
  LeetCode,
  LinkedIn,
  Resume,
  Twitter,
} from "../../icons";
import {
  USER_EMAIL,
  USER_GITHUB_URL,
  USER_LEETCODE_LINK,
  USER_LINKEDIN_URL,
  USER_RESUME_URL,
  USER_TWITTER_URL,
} from "../../user-data";
import { IntroIcon } from "./intro-icon";
import { AppSectionRefs } from "../app-scroll-context";

type SectionSearchItem = {
  name: string;
  icon: React.ReactNode;
  section: keyof AppSectionRefs;
};

type LinkSearchItem = {
  name: string;
  icon: React.ReactNode;
  url: string;
};

export const SECTION_SEARCH_ITEMS: SectionSearchItem[] = [
  {
    name: "Intro",
    icon: <IntroIcon />,
    section: "intro",
  },
  {
    name: "About",
    icon: <AboutIcon />,
    section: "about",
  },
  {
    name: "Experience",
    icon: <ExperienceIcon />,
    section: "experience",
  },
  {
    name: "Skills",
    icon: <SkillsIcon />,
    section: "skills",
  },
  {
    name: "Projects",
    icon: <ProjectsIcon />,
    section: "projects",
  },
  {
    name: "Education",
    icon: <EducationIcon />,
    section: "education",
  },
];

export const LINK_SEARCH_ITEMS: LinkSearchItem[] = [
  {
    name: "LinkedIn",
    icon: <LinkedIn />,
    url: USER_LINKEDIN_URL,
  },
  {
    name: "Resume",
    icon: <Resume />,
    url: USER_RESUME_URL,
  },
  {
    name: "GitHub",
    icon: <GitHub />,
    url: USER_GITHUB_URL,
  },
  {
    name: "LeetCode",
    icon: <LeetCode />,
    url: USER_LEETCODE_LINK,
  },
  {
    name: "Twitter (X)",
    icon: <Twitter />,
    url: USER_TWITTER_URL,
  },
  {
    name: "Email",
    icon: <Email />,
    url: `mailto:${USER_EMAIL}`,
  },
];
