import React, { useEffect } from "react";
import { Header } from "./sections/header";
import { About } from "./sections/about";
import { Experience } from "./sections/experience";
import { Education } from "./sections/education";
import { Skills } from "./sections/skills";
import { Footer } from "./sections/footer";
import { useScroll } from "framer-motion";
import { Projects } from "./sections/projects";
import { TopNav } from "./sections/top-nav";
import { AppScrollProvider } from "./sections/app-scroll-context";
import { initGA, trackPageViewWithUTM } from "./lib/google-analytics";
import { useTheme } from "./components/theme-provider";
import { NewUserMessage } from "./sections/config/new-user-message";
import { AccentWallpaper } from "./sections/config/accent-wallpaper";
import { InteractiveWallpaper } from "./sections/config/interactive-wallpaper";
import { ParticleWallpaper } from "./sections/config/particle-wallpaper";
import { RippleWallpaper } from "./sections/config/ripple-wallpaper";
import { WaveWallpaper } from "./sections/config/wave-wallpaper";

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { wallpaper } = useTheme();

  useEffect(() => {
    initGA("G-03ZF737H5N");
    const getUTMParams = (): Record<string, string | null> => {
      const searchParams = new URLSearchParams(window.location.search);
      return {
        utm_source: searchParams.get("utm_source"),
        utm_medium: searchParams.get("utm_medium"),
        utm_campaign: searchParams.get("utm_campaign"),
        utm_content: searchParams.get("utm_content"),
        utm_term: searchParams.get("utm_term"),
      };
    };
    const utmParams = getUTMParams();
    trackPageViewWithUTM(
      window.location.pathname + window.location.search,
      utmParams
    );
  }, []);

  return (
    <AppScrollProvider>
      {wallpaper === "accent" && <AccentWallpaper />}
      {wallpaper === "particle" && <ParticleWallpaper />}
      {wallpaper === "ripple" && <RippleWallpaper />}
      {wallpaper === "wave" && <WaveWallpaper />}
      {wallpaper === "interactive" && <InteractiveWallpaper />}
      <NewUserMessage />
      <TopNav scrollYProgress={scrollYProgress} />
      <div className="px-2 pt-2 lg:px-36 lg:pt-4 flex flex-col gap-2 lg:gap-4 mt-14">
        <Header sectionIndex={0} />
        <About sectionIndex={1} />
        <Experience sectionIndex={2} />
        <Skills sectionIndex={3} />
        <Projects sectionIndex={4} />
        <Education sectionIndex={5} />
      </div>
      <Footer />
    </AppScrollProvider>
  );
};

export default App;
