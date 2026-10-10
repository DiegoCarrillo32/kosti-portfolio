"use client";

import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "./ChakraProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import SoftSkills from "./components/SoftSkills";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function ClassicCV() {
  return (
    <ChakraProvider>
      <Navbar />
      <Box>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Technologies />
        <SoftSkills />
        <Footer />
      </Box>
      <ScrollToTop />
    </ChakraProvider>
  );
}
