import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "system";
export type Accent = "blue" | "yellow" | "orange" | "pink" | "purple" | "green";
const defaultAccent: Accent = "purple";

interface ThemeContextType {
  theme: Theme;
  accent: Accent;
  setTheme: (newTheme: Theme) => void;
  setAccent: (newAccent: Accent) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  accent: defaultAccent,
  setTheme: () => {},
  setAccent: () => {},
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
    (localStorage.getItem("data-theme") as Theme) || getInitialTheme()
  );
  const [accent, setAccent] = useState<Accent>(
    (localStorage.getItem("data-accent") as Accent) || defaultAccent
  );

  const setNewTheme = (theme: Theme) => {
    setTheme(theme);
    localStorage.setItem("data-theme", theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  const setNewAccent = (accent: Accent) => {
    setAccent(accent);
    localStorage.setItem("data-accent", accent);
    document.querySelector("html")?.setAttribute("data-accent", accent);
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-accent", accent);
  }, [accent]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setNewTheme,
        accent: accent,
        setAccent: setNewAccent,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
