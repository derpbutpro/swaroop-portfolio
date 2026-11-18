import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JudgesOverview from './components/JudgesOverview';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      {/* 1. Navbar: Brand, section links, mobile & keyboard navigation */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* 2. Hero: Name, intro, profile image, CTAs ("View my work", "Contact me", "View for Judges") */}
        <Hero />

        {/* Compact Overview for Competition Judges */}
        <JudgesOverview />

        {/* 3. About: Bio, college, field of study, personal interests, skills tags/chips */}
        <About />

        {/* 4. Projects: All 4 project cards with reusable ProjectCard component */}
        <Projects />

        {/* 5. Contact: Verified channels & frontend preview form */}
        <Contact />
      </main>

      {/* 6. Footer: "© 2026 Swaroop Bevinal" */}
      <Footer />
    </>
  );
}
