import { ReactElement } from "react";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import ProfileIcon from "../icons/ProfileIcon";
import ExperienceIcon from "../icons/ExperienceIcon";
import EducationIcon from "../icons/EducationIcon";
import CodingIcon from "../icons/CodingIcon";
import ContactIcon from "../icons/ContactIcon";
import Additional from "../pages/Additional";
import AdditionalIcon from "../icons/AdditionalIcon";
import ProjectIcon from "../icons/ProjectIcon";

interface RoutesModel {
  path: string;
  name: string;
  element: ReactElement;
  icon: ReactElement;
}

const routesList: RoutesModel[] = [
  {
    path: "/",
    name: "About",
    element: <About />,
    icon: <ProfileIcon />,
  },
  {
    path: "/experience",
    name: "Experience",
    element: <Experience />,
    icon: <ExperienceIcon size="sm" />,
  },
  {
    path: "/education",
    name: "Education",
    element: <Education />,
    icon: <EducationIcon size="sm" />,
  },
  {
    path: "/projects",
    name: "Projects",
    element: <Projects />,
    icon: <ProjectIcon size="sm" />,
  },
  {
    path: "/skills",
    name: "Skills",
    element: <Skills />,
    icon: <CodingIcon size="sm" />,
  },
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />,
    icon: <ContactIcon size="sm" />,
  },
  {
    path: "/additional",
    name: "Additional",
    element: <Additional />,
    icon: <AdditionalIcon size="sm" />,
  },
];

export default routesList;
