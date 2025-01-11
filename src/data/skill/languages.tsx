import Java from "@/components/icons/java";
import Skill from "@/types/skill";
import {
  SiC,
  SiCHex,
  SiCplusplus,
  SiCplusplusHex,
  SiJavascript,
  SiJavascriptHex,
  SiPhp,
  SiPhpHex,
  SiPython,
  SiPythonHex,
  SiR,
  SiRHex,
  SiScala,
  SiScalaHex,
  SiTypescript,
  SiTypescriptHex,
} from "@icons-pack/react-simple-icons";

const S_C: Skill = {
  name: "C",
  icon: <SiC />,
  color: SiCHex,
};

export const S_Cplusplus: Skill = {
  name: "C++",
  icon: <SiCplusplus />,
  color: SiCplusplusHex,
};

const S_Javascript: Skill = {
  name: "JavaScript",
  icon: <SiJavascript />,
  color: SiJavascriptHex,
};

export const S_Typescript: Skill = {
  name: "TypeScript",
  icon: <SiTypescript />,
  color: SiTypescriptHex,
};
const S_Scala: Skill = {
  name: "Scala",
  icon: <SiScala />,
  color: SiScalaHex,
};

const S_R: Skill = {
  name: "R",
  icon: <SiR />,
  color: SiRHex,
};

export const S_Python: Skill = {
  name: "Python",
  icon: <SiPython />,
  color: SiPythonHex,
};

const S_Php: Skill = {
  name: "php",
  icon: <SiPhp />,
  color: SiPhpHex,
};

export const S_Java: Skill = {
  name: "Java",
  icon: <Java />,
  color: "#f89820",
};

export const SKILL_LANGUAGE = [
  S_Python,
  S_Typescript,
  S_Java,
  S_Javascript,
  S_Cplusplus,
  S_R,
  S_Scala,
  S_C,
  S_Php,
];
