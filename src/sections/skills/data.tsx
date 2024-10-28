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

type SkillType = {
  name: string;
  icon: React.ReactNode;
};

export const LANGUAGE_LIST: SkillType[] = [
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

export const FRONT_END_LIST: SkillType[] = [
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

export const BACKEND_LIST: SkillType[] = [
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

export const CLOUD_LIST: SkillType[] = [
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

export const TESTING_LIST: SkillType[] = [
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

export const OTHERS_LIST: SkillType[] = [
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
