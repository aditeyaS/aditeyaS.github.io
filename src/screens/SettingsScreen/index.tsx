import { AppScreenContainer } from "../../components";
import { routes } from "../../common";
import { SettingsIcon } from "./SettingsIcon";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { changeTheme, selectTheme } from "../../redux/appSlice";

export const SettingsScreen = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const appTheme = useAppSelector(selectTheme);

  const onLock = () => {
    navigate(routes.LOCK);
  };

  const onShutDown = () => {
    navigate(routes.POWER);
  };

  const onThemeChange = (theme: string) => {
    if (theme === "system") {
      dispatch(changeTheme(theme));
      const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)");
      document
        .querySelector("html")
        ?.setAttribute("data-theme", isSystemDark ? "dark" : "light");
    } else if (theme === "light") {
      dispatch(changeTheme(theme));
      document.querySelector("html")?.setAttribute("data-theme", "light");
    } else if (theme === "dark") {
      dispatch(changeTheme(theme));
      document.querySelector("html")?.setAttribute("data-theme", "dark");
    }
  };

  return (
    <AppScreenContainer
      body={
        <section className="py-10">
          <div className="flex justify-center flex flex-col items-center py-10 gap-4">
            <div className="motion-safe:animate-spin">
              <SettingsIcon />
            </div>
            <h1 className="text-primary text-4xl md:text-7xl font-title">
              Settings
              <span className="text-secondary">.</span>
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between  border-y-2 border-base-200">
              <span>Theme</span>
              <select
                className="select select-ghost"
                value={appTheme}
                onChange={(e) => onThemeChange(e.target.value)}
              >
                <option value="light" disabled={appTheme === "light"}>
                  Light
                </option>
                <option value="dark" disabled={appTheme === "dark"}>
                  Dark
                </option>
                <option value="system" disabled={appTheme === "system"}>
                  System
                </option>
              </select>
            </div>
            <div className="flex items-center justify-between  border-b-2 border-base-200">
              <button onClick={onLock} className="p-2 w-full text-primary">
                Lock Screen
              </button>
            </div>
            <div className="flex items-center justify-between  border-b-2 border-base-200">
              <button onClick={onShutDown} className="p-2 w-full text-red-500">
                Shut Down
              </button>
            </div>
          </div>
        </section>
      }
    />
  );
};
