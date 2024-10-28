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
  color: string;
};

export const CURRENT_LIST: SkillType[] = [
  {
    name: "Python",
    icon: <Python />,
    color: "#3776AB",
  },
  {
    name: "Typescript",
    icon: <Typescript />,
    color: "#3178C6",
  },
  {
    name: "React",
    icon: <ReactIcon />,
    color: "#61DAFB",
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCss />,
    color: "#06B6D4",
  },
  {
    name: "Express",
    icon: <Express />,
    color: "",
  },
  {
    name: "Amazon API Gateway",
    icon: <AmazonAPIGateway />,
    color: "#FF4F8B",
  },
  {
    name: "Amazon CloudWatch",
    icon: <AmazonCloudwatch />,
    color: "#FF4F8B",
  },
  {
    name: "Amazon DynamoDB",
    icon: <AmazonDynamoDB />,
    color: "#4053D6",
  },
  {
    name: "Amazon Lambda",
    icon: <AWSLambda />,
    color: "#FF9900",
  },
  {
    name: "OpenAI",
    icon: <OpenAI />,
    color: "#412991",
  },
  {
    name: "Git",
    icon: <Git />,
    color: "#F05032",
  },
  {
    name: "Postman",
    icon: <Postman />,
    color: "#FF6C37",
  },
];

export const LANGUAGE_LIST: SkillType[] = [
  {
    name: "Python",
    icon: <Python />,
    color: "#3776AB",
  },
  {
    name: "Java",
    icon: <Java />,
    color: " #F89820",
  },
  {
    name: "Typescript",
    icon: <Typescript />,
    color: "#3178C6",
  },
  {
    name: "Javascript",
    icon: <Javascript />,
    color: "#F7DF1E",
  },
  {
    name: "C",
    icon: <C />,
    color: "#A8B9CC",
  },
  {
    name: "C++",
    icon: <Cpp />,
    color: "#00599C",
  },
  {
    name: "Php",
    icon: <Php />,
    color: "#777BB4",
  },
  {
    name: "R",
    icon: <R />,
    color: "#276DC3",
  },
  {
    name: "Scala",
    icon: <Scala />,
    color: "#DC322F",
  },
  {
    name: "Markdown",
    icon: <Markdown />,
    color: "",
  },
  {
    name: "YAML",
    icon: <Yaml />,
    color: "#CB171E",
  },
];

export const FRONT_END_LIST: SkillType[] = [
  {
    name: "React",
    icon: <ReactIcon />,
    color: "#61DAFB",
  },
  {
    name: "Angular",
    icon: <Angular />,
    color: "",
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindCss />,
    color: "#06B6D4",
  },
  {
    name: "Framer Motion",
    icon: <FramerMotion />,
    color: "#0055FF",
  },
  {
    name: "Bootstrap",
    icon: <Bootstrap />,
    color: "#7952B3",
  },
  {
    name: "HTML",
    icon: <Html />,
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: <Css />,
    color: "#1572B6",
  },
  {
    name: "jQuery",
    icon: <Jquery />,
    color: "#0769AD",
  },
  {
    name: "React Router",
    icon: <ReactRouter />,
    color: "#CA4245",
  },
  {
    name: "React Hook Form",
    icon: <ReactHookForm />,
    color: "#EC5990",
  },
  {
    name: "Redux",
    icon: <Redux />,
    color: "#764ABC",
  },
  {
    name: "Sass",
    icon: <Sass />,
    color: "#CC6699",
  },
  {
    name: "Daisy UI",
    icon: <DaisyUi />,
    color: "#1AD1A5",
  },
  {
    name: "MUI",
    icon: <MUI />,
    color: "#007FFF",
  },
  {
    name: "shadcn/ui",
    icon: <ShadcnUI />,
    color: "",
  },
  {
    name: "Axios",
    icon: <Axios />,
    color: "#5A29E4",
  },
  {
    name: "NgRx",
    icon: <NgRx />,
    color: "#BA2BD2",
  },
  {
    name: "Chart.js",
    icon: <ChartJs />,
    color: "#FF6384",
  },
  {
    name: "Autoprefixer",
    icon: <Autoprefixer />,
    color: "#DD3735",
  },
  {
    name: "PostCSS",
    icon: <PostCss />,
    color: "#DD3A0A",
  },
  {
    name: "Redux-Saga",
    icon: <ReduxSaga />,
    color: "#999999",
  },
  {
    name: "Vite",
    icon: <Vite />,
    color: "#646CFF",
  },
  {
    name: "Webpack",
    icon: <Webpack />,
    color: "#8DD6F9",
  },
];

export const BACKEND_LIST: SkillType[] = [
  {
    name: "Django",
    icon: <Django />,
    color: "#092E20",
  },
  {
    name: "Express",
    icon: <Express />,
    color: "",
  },
  {
    name: "Flask",
    icon: <Flask />,
    color: "",
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQL />,
    color: "#4169E1",
  },
  {
    name: "Spring Boot",
    icon: <SpringBoot />,
    color: "#6DB33F",
  },
  {
    name: "MySQL",
    icon: <MySql />,
    color: "#4479A1",
  },
  {
    name: "MongoDB",
    icon: <MongoDb />,
    color: "#47A248",
  },
  {
    name: "Firebase",
    icon: <Firebase />,
    color: "#DD2C00",
  },
];

export const CLOUD_LIST: SkillType[] = [
  {
    name: "Amazon Web Services",
    icon: <AWS />,
    color: "#FF9900",
  },
  {
    name: "Amazon API Gateway",
    icon: <AmazonAPIGateway />,
    color: "#FF4F8B",
  },
  {
    name: "Amazon CloudWatch",
    icon: <AmazonCloudwatch />,
    color: "#FF4F8B",
  },
  {
    name: "Amazon DynamoDB",
    icon: <AmazonDynamoDB />,
    color: "#4053D6",
  },
  {
    name: "Amazon EC2",
    icon: <AmazonEC2 />,
    color: "#FF9900",
  },
  {
    name: "Amazon RDS",
    icon: <AmazonRDS />,
    color: "#527FFF",
  },
  {
    name: "Amazon Lambda",
    icon: <AWSLambda />,
    color: "#FF9900",
  },
];

export const TESTING_LIST: SkillType[] = [
  {
    name: "Cypress",
    icon: <Cypress />,
    color: "#69D3A7",
  },
  {
    name: "Chai",
    icon: <Chai />,
    color: "#A30701",
  },
  {
    name: "Puppeteer",
    icon: <Puppeteer />,
    color: "#40B5A4",
  },
  {
    name: "Jasmine",
    icon: <Jasmine />,
    color: "#8A4182",
  },
  {
    name: "Jest",
    icon: <Jest />,
    color: "#C21325",
  },
  {
    name: "Mocha",
    icon: <Mocha />,
    color: "#8D6748",
  },
];

export const OTHERS_LIST: SkillType[] = [
  {
    name: "Docker",
    icon: <Docker />,
    color: "#2496ED",
  },
  {
    name: "Android Development (Java)",
    icon: <AndroidStudio />,
    color: "#3DDC84",
  },
  {
    name: "Zod",
    icon: <Zod />,
    color: "#3E67B1",
  },
  {
    name: "Qt",
    icon: <Qt />,
    color: "#41CD52",
  },
  {
    name: "Pandas",
    icon: <Pandas />,
    color: "#150458",
  },
  {
    name: "OpenAI",
    icon: <OpenAI />,
    color: "#412991",
  },
  {
    name: "NumPy",
    icon: <NumPy />,
    color: "#013243",
  },
  {
    name: "i18next",
    icon: <I18next />,
    color: "#26A69A",
  },
  {
    name: "Git",
    icon: <Git />,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: <GitHub />,
    color: "",
  },
  {
    name: "GitHub Actions",
    icon: <GitHubActions />,
    color: "#2088FF",
  },
  {
    name: "Anaconda",
    icon: <Anaconda />,
    color: "#44A833",
  },
  {
    name: "Atlassian Jira",
    icon: <Atlassian />,
    color: "#0052CC",
  },
  {
    name: "Postman",
    icon: <Postman />,
    color: "#FF6C37",
  },
  {
    name: "Chrome Web Store",
    icon: <ChromeWebStore />,
    color: "#4285F4",
  },
  {
    name: "ESLint",
    icon: <ESLint />,
    color: "#4B32C3",
  },
  {
    name: "JSON",
    icon: <JSONIcon />,
    color: "",
  },
  {
    name: "JSON Web Token",
    icon: <JWT />,
    color: "",
  },
  {
    name: "Linux",
    icon: <Linux />,
    color: "#FCC624",
  },
  {
    name: "npm",
    icon: <NPM />,
    color: "#CB3837",
  },
  {
    name: "Vercel",
    icon: <Vercel />,
    color: "",
  },
  {
    name: "Render",
    icon: <Render />,
    color: "",
  },
];
