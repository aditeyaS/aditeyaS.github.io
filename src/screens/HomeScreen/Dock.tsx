import { AppIcon } from "../../components";
import ProfileIcon from "../../icons/ProfileIcon";
import { routes } from "../../common";
import ExperienceIcon from "../../icons/ExperienceIcon";
import EducationIcon from "../../icons/EducationIcon";
import ProjectIcon from "../../icons/ProjectIcon";

const Dock = () => {
  return (
    <div className="flex justify-center w-full p-1">
      <div className="flex w-full justify-around bg-base-200 p-2 rounded-2xl items-center gap-4">
        <div>
          <AppIcon icon={<ProfileIcon />} url={routes.ABOUT} />
        </div>
        <div>
          <AppIcon
            icon={<ExperienceIcon size="sm" />}
            url={routes.EXPERIENCE}
          />
        </div>
        <div>
          <AppIcon icon={<EducationIcon size="sm" />} url={routes.EDUCATION} />
        </div>
        <div>
          <AppIcon icon={<ProjectIcon size="sm" />} url={routes.PROJECTS} />
        </div>
      </div>
    </div>
  );
};

export default Dock;
