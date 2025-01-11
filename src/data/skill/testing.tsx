import Skill from "@/types/skill";
import {
  SiChai,
  SiChaiHex,
  SiCypress,
  SiCypressHex,
  SiJasmine,
  SiJasmineHex,
  SiJest,
  SiJestHex,
  SiMocha,
  SiMochaHex,
  SiPuppeteer,
  SiPuppeteerHex,
} from "@icons-pack/react-simple-icons";

const CHAI: Skill = {
  name: "Chai",
  icon: <SiChai />,
  color: SiChaiHex,
};

const CYPRESS: Skill = {
  name: "Cypress",
  icon: <SiCypress />,
  color: SiCypressHex,
};

const JASMINE: Skill = {
  name: "Jasmine",
  icon: <SiJasmine />,
  color: SiJasmineHex,
};

const JEST: Skill = {
  name: "Jest",
  icon: <SiJest />,
  color: SiJestHex,
};

const S_Mocha: Skill = {
  name: "Mocha",
  icon: <SiMocha />,
  color: SiMochaHex,
};

const S_Puppeteer: Skill = {
  name: "Puppeteer",
  icon: <SiPuppeteer />,
  color: SiPuppeteerHex,
};
export const SKILL_TESTING = [
  S_Puppeteer,
  CYPRESS,
  CHAI,
  JASMINE,
  JEST,
  S_Mocha,
];
