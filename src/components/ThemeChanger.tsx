import { useState } from "react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

const ThemeChanger = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>();
  const onChangeTheme = () => {
    if (darkTheme) {
      document.querySelector("html")?.setAttribute("data-theme", "light");
    } else {
      document.querySelector("html")?.setAttribute("data-theme", "dark");
    }
    setDarkTheme(!darkTheme);
  };
  return (
    <button className="btn btn-circle" onClick={onChangeTheme}>
      {darkTheme ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeChanger;
