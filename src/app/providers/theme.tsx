import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";
export type Wallpaper = "none" | "accent" | "wave" | "particle";

const defaultTheme: Theme = "dark";
const defaultWallpaper: Wallpaper = "wave";

const THEME_LOCAL_STORAGE_KEY = "portfolio-theme";
const WALLPAPER_LOCAL_STORAGE_KEY = "portfolio-wallpaper";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  wallpaper: Wallpaper;
  setWallpaper: (wallpaper: Wallpaper) => void;
};

const initialState: ThemeProviderState = {
  theme: defaultTheme,
  setTheme: () => null,
  wallpaper: defaultWallpaper,
  setWallpaper: () => {},
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

type ThemeProviderProps = {
  children: React.ReactNode;
};
export function ThemeProvider({ children }: ThemeProviderProps) {
  const getSystemTheme = (): Theme =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [currentTheme, setCurrentTheme] = useState<Theme>(
    () =>
      (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme) ||
      defaultTheme ||
      getSystemTheme()
  );

  const [currentWallpaper, setCurrentWallpaper] = useState<Wallpaper>(
    (localStorage.getItem(WALLPAPER_LOCAL_STORAGE_KEY) as Wallpaper) ||
      defaultWallpaper
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeProviderContext.Provider
      value={{
        theme: currentTheme,
        setTheme: (theme: Theme) => {
          localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
          setCurrentTheme(theme);
        },
        wallpaper: currentWallpaper,
        setWallpaper: (wallpaper: Wallpaper) => {
          localStorage.setItem(WALLPAPER_LOCAL_STORAGE_KEY, wallpaper);
          setCurrentWallpaper(wallpaper);
        },
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
