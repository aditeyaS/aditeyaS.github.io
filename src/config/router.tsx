import { createBrowserRouter } from "react-router-dom";
import {
  AboutScreen,
  AdditionalScreen,
  BootScreen,
  ContactScreen,
  EducationScreen,
  ExperienceScreen,
  HomeScreen,
  LockScreen,
  PowerScreen,
  ProjectScreen,
  SkillScreen,
} from "../screens";
import { routes } from "../common";

const router = createBrowserRouter([
  {
    path: routes.POWER,
    element: <PowerScreen />,
  },
  {
    path: routes.BOOT,
    element: <BootScreen />,
  },
  {
    path: routes.LOCK,
    element: <LockScreen />,
  },
  {
    path: routes.HOME,
    element: <HomeScreen />,
  },
  {
    path: routes.ABOUT,
    element: <AboutScreen />,
  },
  {
    path: routes.EXPERIENCE,
    element: <ExperienceScreen />,
  },
  {
    path: routes.EDUCATION,
    element: <EducationScreen />,
  },
  {
    path: routes.PROJECTS,
    element: <ProjectScreen />,
  },
  {
    path: routes.SKILLS,
    element: <SkillScreen />,
  },
  {
    path: routes.CONTACT,
    element: <ContactScreen />,
  },
  {
    path: routes.ADDITIONAL,
    element: <AdditionalScreen />,
  },
]);

export default router;
