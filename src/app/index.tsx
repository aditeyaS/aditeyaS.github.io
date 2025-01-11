import { useScroll } from "framer-motion";
import { ThemeProvider } from "./providers/theme";
import { ScrollProvider } from "./providers/scroll";
import { NavBar } from "./nav-bar";
import { Introduction } from "./section/introduction";
import { Contact } from "./section/contact";
import { Toaster } from "@/components/ui/toaster";
import { About } from "./section/about";
import { Carousel } from "./section/carousel";
import { Experience } from "./section/experience";
import { Projects } from "./section/projects";
import { Education } from "./section/education";
import { Skills } from "./section/skills";
import { Footer } from "./footer";
import Wallpapers from "./wallpapers";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <ThemeProvider>
      <ScrollProvider>
        <Wallpapers />
        <NavBar scrollYProgress={scrollYProgress} />
        <div className="mt-14 p-4 lg:p-6 flex flex-col gap-6">
          <Introduction />
          <About />
          <Carousel />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </div>
        <Footer />
        <Toaster />
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;
