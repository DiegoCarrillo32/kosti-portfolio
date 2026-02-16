"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import SoftSkills from "@/components/SoftSkills";
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Technologies />
      <SoftSkills />
      <Footer />
    </Box>
  );
}
