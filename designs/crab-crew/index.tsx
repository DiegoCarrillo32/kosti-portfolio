"use client";

import "./vendor/tokens.css";
import "./vendor/bundle.css";
import "./crab-crew.css";
import { fontVariables } from "./fonts";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Technologies from "./sections/Technologies";
import SoftSkills from "./sections/SoftSkills";
import Footer from "./sections/Footer";
import ScrollToTop from "./sections/ScrollToTop";

// The CV as a crab crew: Diego leads, every job, project and skill is a crab of its own.
export default function CrabCrewCV() {
  return (
    <div className={`cv-root ${fontVariables}`}>
      <Nav />
      <main id="main" className="cv-wrap cv-main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Technologies />
        <SoftSkills />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
