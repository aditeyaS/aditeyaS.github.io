import React, { useState } from "react";
import {
  Django,
  Express,
  Firebase,
  Flask,
  MongoDb,
  MySql,
  PostgreSQL,
  SpringBoot,
  AmazonAPIGateway,
  AmazonCloudwatch,
  AmazonDynamoDB,
  AmazonEC2,
  AmazonRDS,
  AWS,
  AWSLambda,
  Angular,
  Autoprefixer,
  Axios,
  Bootstrap,
  ChartJs,
  Css,
  DaisyUi,
  Html,
  Jquery,
  MUI,
  NgRx,
  PostCss,
  ReactHookForm,
  ReactIcon,
  ReactRouter,
  ReduxSaga,
  Sass,
  ShadcnUI,
  TailwindCss,
  Vite,
  Webpack,
  Redux,
  C,
  Cpp,
  Java,
  Javascript,
  Markdown,
  Php,
  Python,
  R,
  Scala,
  Typescript,
  Yaml,
  Chai,
  Cypress,
  Jasmine,
  Jest,
  Mocha,
  Puppeteer,
  Anaconda,
  AndroidStudio,
  Atlassian,
  ChromeWebStore,
  Docker,
  ESLint,
  Git,
  GitHub,
  GitHubActions,
  I18next,
  JSONIcon,
  JWT,
  Linux,
  NPM,
  NumPy,
  OpenAI,
  Pandas,
  Postman,
  Qt,
  Render,
  Vercel,
  Zod,
  FramerMotion,
} from "../../icons";
import { SectionContainer } from "../../components/layout/section-container";
import { Chip, H1, TXT } from "../../components/ui";
import { Icon } from "./icon";
import { motion } from "framer-motion";
import SectionProps from "../../types/section-props";
import { useAppScroll } from "../app-scroll-context";

type SkillType = {
  name: string;
  icon: React.ReactNode;
};

const languageList: SkillType[] = [
  {
    name: "Python",
    icon: <Python />,
  },
  {
    name: "Java",
    icon: <Java />,
  },
  {
    name: "Typescript",
    icon: <Typescript />,
  },
  {
    name: "Javascript",
    icon: <Javascript />,
  },
  {
    name: "C",
    icon: <C />,
  },
  {
    name: "C++",
    icon: <Cpp />,
  },
  {
    name: "Php",
    icon: <Php />,
  },
  {
    name: "R",
    icon: <R />,
  },
  {
    name: "Scala",
    icon: <Scala />,
  },
  {
    name: "Markdown",
    icon: <Markdown />,
  },
  {
    name: "YAML",
    icon: <Yaml />,
  },
];

const feList: SkillType[] = [
  {
    name: "React",
    icon: <ReactIcon />,
  },
  {
    name: "Angular",
    icon: <Angular />,
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCss />,
  },
  {
    name: "Framer Motion",
    icon: <FramerMotion />,
  },
  {
    name: "Bootstrap",
    icon: <Bootstrap />,
  },
  {
    name: "HTML",
    icon: <Html />,
  },
  {
    name: "CSS",
    icon: <Css />,
  },
  {
    name: "jQuery",
    icon: <Jquery />,
  },
  {
    name: "React Router",
    icon: <ReactRouter />,
  },
  {
    name: "React Hook Form",
    icon: <ReactHookForm />,
  },
  {
    name: "Redux",
    icon: <Redux />,
  },
  {
    name: "Sass",
    icon: <Sass />,
  },
  {
    name: "Daisy UI",
    icon: <DaisyUi />,
  },
  {
    name: "MUI",
    icon: <MUI />,
  },
  {
    name: "shadcn/ui",
    icon: <ShadcnUI />,
  },
  {
    name: "Axios",
    icon: <Axios />,
  },
  {
    name: "NgRx",
    icon: <NgRx />,
  },
  {
    name: "Chart.js",
    icon: <ChartJs />,
  },
  {
    name: "Autoprefixer",
    icon: <Autoprefixer />,
  },
  {
    name: "PostCSS",
    icon: <PostCss />,
  },
  {
    name: "Redux-Saga",
    icon: <ReduxSaga />,
  },
  {
    name: "Vite",
    icon: <Vite />,
  },
  {
    name: "Webpack",
    icon: <Webpack />,
  },
];

const beList: SkillType[] = [
  {
    name: "Django",
    icon: <Django />,
  },
  {
    name: "Express",
    icon: <Express />,
  },
  {
    name: "Flask",
    icon: <Flask />,
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQL />,
  },
  {
    name: "Spring Boot",
    icon: <SpringBoot />,
  },
  {
    name: "MySQL",
    icon: <MySql />,
  },
  {
    name: "MongoDB",
    icon: <MongoDb />,
  },
  {
    name: "Firebase",
    icon: <Firebase />,
  },
];

const cloudList: SkillType[] = [
  {
    name: "Amazon Web Services",
    icon: <AWS />,
  },
  {
    name: "Amazon API Gateway",
    icon: <AmazonAPIGateway />,
  },
  {
    name: "Amazon CloudWatch",
    icon: <AmazonCloudwatch />,
  },
  {
    name: "Amazon DynamoDB",
    icon: <AmazonDynamoDB />,
  },
  {
    name: "Amazon EC2",
    icon: <AmazonEC2 />,
  },
  {
    name: "Amazon RDS",
    icon: <AmazonRDS />,
  },
  {
    name: "Amazon Lambda",
    icon: <AWSLambda />,
  },
];

const testingList: SkillType[] = [
  {
    name: "Cypress",
    icon: <Cypress />,
  },
  {
    name: "Chai",
    icon: <Chai />,
  },
  {
    name: "Puppeteer",
    icon: <Puppeteer />,
  },
  {
    name: "Jasmine",
    icon: <Jasmine />,
  },
  {
    name: "Jest",
    icon: <Jest />,
  },
  {
    name: "Mocha",
    icon: <Mocha />,
  },
];

const othersList: SkillType[] = [
  {
    name: "Docker",
    icon: <Docker />,
  },
  {
    name: "Android Development (Java)",
    icon: <AndroidStudio />,
  },
  {
    name: "Zod",
    icon: <Zod />,
  },
  {
    name: "Qt",
    icon: <Qt />,
  },
  {
    name: "Pandas",
    icon: <Pandas />,
  },
  {
    name: "OpenAI",
    icon: <OpenAI />,
  },
  {
    name: "NumPy",
    icon: <NumPy />,
  },
  {
    name: "i18next",
    icon: <I18next />,
  },
  {
    name: "Git",
    icon: <Git />,
  },
  {
    name: "GitHub",
    icon: <GitHub />,
  },
  {
    name: "GitHub Actions",
    icon: <GitHubActions />,
  },
  {
    name: "Anaconda",
    icon: <Anaconda />,
  },
  {
    name: "Atlassian Jira",
    icon: <Atlassian />,
  },
  {
    name: "Postman",
    icon: <Postman />,
  },
  {
    name: "Chrome Web Store",
    icon: <ChromeWebStore />,
  },
  {
    name: "ESLint",
    icon: <ESLint />,
  },
  {
    name: "JSON",
    icon: <JSONIcon />,
  },
  {
    name: "JSON Web Token",
    icon: <JWT />,
  },
  {
    name: "Linux",
    icon: <Linux />,
  },
  {
    name: "npm",
    icon: <NPM />,
  },
  {
    name: "Vercel",
    icon: <Vercel />,
  },
  {
    name: "Render",
    icon: <Render />,
  },
];

export const Skills: React.FC<SectionProps> = ({ sectionIndex }) => {
  const [viewerType, setViewerType] = useState<
    "languages" | "fe" | "be" | "cloud" | "testing" | "others"
  >("languages");

  const { appSectionRefs } = useAppScroll();

  return (
    <SectionContainer sectionIndex={sectionIndex} ref={appSectionRefs.skills}>
      <section className="flex flex-col gap-2">
        <div className="flex gap-2 items-center text-foreground-2">
          <Icon />
          <H1>Skills</H1>
        </div>
        <div className="flex gap-1 items-center flex-wrap">
          <Chip
            selected={viewerType === "languages"}
            onClick={() => setViewerType("languages")}
          >
            languages
          </Chip>
          <Chip
            selected={viewerType === "fe"}
            onClick={() => setViewerType("fe")}
          >
            front-end
          </Chip>
          <Chip
            selected={viewerType === "be"}
            onClick={() => setViewerType("be")}
          >
            back-end
          </Chip>
          <Chip
            selected={viewerType === "cloud"}
            onClick={() => setViewerType("cloud")}
          >
            cloud
          </Chip>
          <Chip
            selected={viewerType === "testing"}
            onClick={() => setViewerType("testing")}
          >
            testing
          </Chip>
          <Chip
            selected={viewerType === "others"}
            onClick={() => setViewerType("others")}
          >
            others
          </Chip>
        </div>
        <div className="font-light font-code flex gap-1 flex-wrap justify-stretch">
          {viewerType === "languages" &&
            languageList.map((l, index) => (
              <motion.div
                key={`skill-language-${index}`}
                className="px-2 py-1 rounded-2xl flex items-center gap-2 border border-background-3 text-primary hover:bg-background-3"
                initial={{ opacity: 0, x: -100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {l.icon}
                <TXT className="text-foreground text-sm">{l.name}</TXT>
              </motion.div>
            ))}
          {viewerType === "fe" &&
            feList.map((l, index) => (
              <motion.div
                key={`skill-fe-${index}`}
                className="px-2 py-1 rounded-2xl flex items-center gap-2 border border-background-3 text-primary hover:bg-background-3"
                initial={{ opacity: 0, x: 100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {l.icon}
                <TXT className="text-foreground text-sm">{l.name}</TXT>
              </motion.div>
            ))}
          {viewerType === "be" &&
            beList.map((l, index) => (
              <motion.div
                key={`skill-be-${index}`}
                className="px-2 py-1 rounded-2xl flex items-center gap-2 border border-background-3 text-primary hover:bg-background-3"
                initial={{ opacity: 0, x: -100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {l.icon}
                <TXT className="text-foreground text-sm">{l.name}</TXT>
              </motion.div>
            ))}
          {viewerType === "cloud" &&
            cloudList.map((l, index) => (
              <motion.div
                key={`skill-cloud-${index}`}
                className="px-2 py-1 rounded-2xl flex items-center gap-2 border border-background-3 text-primary hover:bg-background-3"
                initial={{ opacity: 0, x: 100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {l.icon}
                <TXT className="text-foreground text-sm">{l.name}</TXT>
              </motion.div>
            ))}

          {viewerType === "testing" &&
            testingList.map((l, index) => (
              <motion.div
                key={`skill-testing-${index}`}
                className="px-2 py-1 rounded-2xl flex items-center gap-2 border border-background-3 text-primary hover:bg-background-3"
                initial={{ opacity: 0, x: -100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {l.icon}
                <TXT className="text-foreground text-sm">{l.name}</TXT>
              </motion.div>
            ))}
          {viewerType === "others" &&
            othersList.map((l, index) => (
              <motion.div
                key={`skill-others-${index}`}
                className="px-2 py-1 rounded-2xl flex items-center gap-2 border border-background-3 text-primary hover:bg-background-3"
                initial={{ opacity: 0, x: 100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                {l.icon}
                <TXT className="text-foreground text-sm">{l.name}</TXT>
              </motion.div>
            ))}
        </div>
      </section>
    </SectionContainer>
  );
};
