import { AppIcon } from "../../components";
import { routes } from "../../common";
import {
  AboutIcon,
  ExperienceIcon,
  EducationIcon,
  ProjectIcon,
  SkillsIcon,
  ContactIcon,
  AdditionalIcon,
  SettingsIcon,
} from "../../icons/apps";

const Dock = () => {
  return (
    <div className="flex justify-center w-full p-1">
      <div className="flex w-full md:w-fit justify-around bg-base-200 bg-opacity-40 p-2 rounded-2xl items-center gap-4">
        <div>
          <AppIcon icon={<AboutIcon />} url={routes.ABOUT} />
        </div>
        <div>
          <AppIcon icon={<ExperienceIcon />} url={routes.EXPERIENCE} />
        </div>
        <div>
          <AppIcon icon={<EducationIcon />} url={routes.EDUCATION} />
        </div>
        <div>
          <AppIcon icon={<ProjectIcon />} url={routes.PROJECTS} />
        </div>
        <div className="hidden md:flex">
          <AppIcon icon={<SkillsIcon />} url={routes.SKILLS} />
        </div>
        <div className="hidden md:flex">
          <AppIcon icon={<ContactIcon />} url={routes.CONTACT} />
        </div>
        <div className="hidden md:flex">
          <AppIcon icon={<AdditionalIcon />} url={routes.ADDITIONAL} />
        </div>
        <div className="hidden md:flex">
          <AppIcon icon={<SettingsIcon />} url={routes.SETTINGS} />
        </div>
      </div>
    </div>
  );
};

export default Dock;
