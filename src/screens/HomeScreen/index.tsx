import { routes } from "../../common";
import { AppIcon } from "../../components";
import {
  SettingsIcon,
  AdditionalIcon,
  SkillsIcon,
  ContactIcon,
} from "../../icons/apps";
import Dock from "./Dock";
import MenuBar from "./MenuBar";

export const HomeScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="fixed top-0 w-full">
        <MenuBar />
      </div>
      <div className="fixed bottom-24 flex justify-around w-full p-1 md:hidden">
        <div>
          <AppIcon icon={<SkillsIcon />} url={routes.SKILLS} />
        </div>
        <div>
          <AppIcon icon={<ContactIcon />} url={routes.CONTACT} />
        </div>
        <div>
          <AppIcon icon={<AdditionalIcon />} url={routes.ADDITIONAL} />
        </div>
        <div>
          <AppIcon icon={<SettingsIcon />} url={routes.SETTINGS} />
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Dock />
      </div>
    </div>
  );
};
