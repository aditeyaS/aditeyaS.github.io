import React from "react";

export type AppSectionRefs = {
  intro: React.RefObject<HTMLDivElement>;
  about: React.RefObject<HTMLDivElement>;
  experience: React.RefObject<HTMLDivElement>;
  skills: React.RefObject<HTMLDivElement>;
  projects: React.RefObject<HTMLDivElement>;
  education: React.RefObject<HTMLDivElement>;
};

type AppScrollContextType = {
  scrollToSection: (section: keyof AppSectionRefs) => void;
  appSectionRefs: AppSectionRefs;
};

const ScrollContext = React.createContext<AppScrollContextType | undefined>(
  undefined
);

type AppScrollProviderProps = {
  children: React.ReactNode;
};

export const AppScrollProvider: React.FC<AppScrollProviderProps> = ({
  children,
}) => {
  const appSectionRefs: AppSectionRefs = {
    intro: React.useRef<HTMLDivElement>(null),
    about: React.useRef<HTMLDivElement>(null),
    experience: React.useRef<HTMLDivElement>(null),
    skills: React.useRef<HTMLDivElement>(null),
    projects: React.useRef<HTMLDivElement>(null),
    education: React.useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof AppSectionRefs) => {
    const sectionElement = appSectionRefs[section]?.current;
    const navbar = document.querySelector("#app-top-nav") as HTMLElement;
    if (sectionElement && navbar) {
      const navbarHeight = parseFloat(getComputedStyle(navbar).height);
      const topPosition =
        sectionElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, appSectionRefs }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useAppScroll = (): AppScrollContextType => {
  const context = React.useContext(ScrollContext);
  if (!context) {
    throw new Error("useAppScroll must be used within a AppScrollProvider");
  }
  return context;
};
