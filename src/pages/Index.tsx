import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <footer className="text-center py-8 text-muted-foreground text-sm font-body border-t border-border">
        © 2025 Disha Sarkar. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
