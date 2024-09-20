import React from "react";
import { Header } from "./sections/header";
import { About } from "./sections/about";
import { Experience } from "./sections/experience";
import { Education } from "./sections/education";
import { Skills } from "./sections/skills";
import { Footer } from "./sections/footer";
import { ThemeModal } from "./sections/theme-modal";
import { Progress } from "./sections/progress";
import { useScroll } from "framer-motion";
import { Projects } from "./sections/projects";

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Progress scrollYProgress={scrollYProgress} />
      <div className="px-2 pt-2 lg:px-36 lg:pt-4 flex flex-col gap-2 lg:gap-4 mt-3">
        <Header sectionIndex={0} />
        <About sectionIndex={1} />
        <Experience sectionIndex={2} />
        <Skills sectionIndex={3} />
        <Projects sectionIndex={4} />
        <Education sectionIndex={5} />
      </div>
      <Footer />
      <ThemeModal />
    </>
  );
};

export default App;
