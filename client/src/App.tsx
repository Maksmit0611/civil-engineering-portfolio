import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Navigation from "./components/Navigation";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Achievements from "./pages/Achievements";
import Presentations from "./pages/Presentations";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main>
              <Hero />
              <Projects />
              <Experience />
              <Skills />
              <Achievements />
              <Presentations />
              <Volunteer />
              <Contact />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
