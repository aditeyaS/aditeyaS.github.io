import { useScroll } from "framer-motion";
import { ThemeProvider } from "./providers/theme";
import { ScrollProvider } from "./providers/scroll";
import { NavBar } from "./nav-bar";
import {
  Introduction,
  About,
  Carousel,
  Contact,
  Education,
  Experience,
  Projects,
  Skills,
} from "./section";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "./footer";
import Wallpapers from "./wallpapers";
import { ScrollToTop } from "@/components/scroll-to-top";

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
        <ScrollToTop />
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;
