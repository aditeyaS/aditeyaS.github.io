import { routes } from "../../common";
import { AppIcon } from "../../components";
import AdditionalIcon from "../../icons/AdditionalIcon";
import CodingIcon from "../../icons/CodingIcon";
import ContactIcon from "../../icons/ContactIcon";
import { SettingsIcon } from "../../icons/apps";
import Additional from "../../pages/Additional";
import Dock from "./Dock";
import MenuBar from "./MenuBar";

export const HomeScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="fixed top-0 w-full">
        <MenuBar />
      </div>
      <div className="fixed bottom-24 flex justify-around w-full p-1">
        <div>
          <AppIcon icon={<CodingIcon size="sm" />} url={routes.SKILLS} />
        </div>
        <div>
          <AppIcon icon={<ContactIcon size="sm" />} url={routes.CONTACT} />
        </div>
        <div>
          <AppIcon
            icon={<AdditionalIcon size="sm" />}
            url={routes.ADDITIONAL}
          />
        </div>
        <div>
          <AppIcon icon={<SettingsIcon />} url={routes.SKILLS} />
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Dock />
      </div>
    </div>
  );
};
