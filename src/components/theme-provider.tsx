import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";
export type Accent = "blue" | "yellow" | "orange" | "pink" | "purple" | "green";
export type Wallpaper =
  | "none"
  | "accent"
  | "wave"
  | "ripple"
  | "particle"
  | "interactive";

const defaultAccent: Accent = "purple";
const defaultWallpaper: Wallpaper = "wave";

const THEME_LOCAL_STORAGE_KEY = "data-theme";
const ACCENT_LOCAL_STORAGE_KEY = "data-accent";
const WALLPAPER_LOCAL_STORAGE_KEY = "data-wallpaper";

interface ThemeContextType {
  theme: Theme;
  accent: Accent;
  wallpaper: Wallpaper;
  setTheme: (newTheme: Theme) => void;
  setAccent: (newAccent: Accent) => void;
  setWallpaper: (newWallpaper: Wallpaper) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  accent: defaultAccent,
  wallpaper: defaultWallpaper,
  setTheme: () => {},
  setAccent: () => {},
  setWallpaper: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const getInitialTheme = (): Theme => {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  if (mq.matches) {
    return "dark";
  } else {
    return "light";
  }
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme) ||
      getInitialTheme()
  );
  const [accent, setAccent] = useState<Accent>(
    (localStorage.getItem(ACCENT_LOCAL_STORAGE_KEY) as Accent) || defaultAccent
  );
  const [wallpaper, setWallpaper] = useState<Wallpaper>(
    (localStorage.getItem(WALLPAPER_LOCAL_STORAGE_KEY) as Wallpaper) ||
      defaultWallpaper
  );
  const faviconEl = document.querySelector('link[rel="icon"]');

  const setNewTheme = (theme: Theme) => {
    setTheme(theme);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
    document
      .querySelector("html")
      ?.setAttribute(THEME_LOCAL_STORAGE_KEY, theme);
  };

  useEffect(() => {
    document
      .querySelector("html")
      ?.setAttribute(THEME_LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  const setNewAccent = (accent: Accent) => {
    faviconEl?.setAttribute("href", `favicon-${accent}.svg`);
    setAccent(accent);
    localStorage.setItem(ACCENT_LOCAL_STORAGE_KEY, accent);
    document
      .querySelector("html")
      ?.setAttribute(ACCENT_LOCAL_STORAGE_KEY, accent);
  };

  useEffect(() => {
    faviconEl?.setAttribute("href", `favicon-${accent}.svg`);
    document
      .querySelector("html")
      ?.setAttribute(ACCENT_LOCAL_STORAGE_KEY, accent);
  }, [accent]);

  const setNewWallpaper = (wallpaper: Wallpaper) => {
    setWallpaper(wallpaper);
    localStorage.setItem(WALLPAPER_LOCAL_STORAGE_KEY, wallpaper);
    document
      .querySelector("html")
      ?.setAttribute(WALLPAPER_LOCAL_STORAGE_KEY, wallpaper);
  };

  useEffect(() => {
    document
      .querySelector("html")
      ?.setAttribute(WALLPAPER_LOCAL_STORAGE_KEY, wallpaper);
  }, [wallpaper]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setNewTheme,
        accent: accent,
        setAccent: setNewAccent,
        wallpaper: wallpaper,
        setWallpaper: setNewWallpaper,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
