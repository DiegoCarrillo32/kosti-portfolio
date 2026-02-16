"use client";

import { IconButton } from "@chakra-ui/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MotionIconButton = motion(IconButton);

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionIconButton
          aria-label="Scroll to top"
          onClick={scrollToTop}
          position="fixed"
          bottom={8}
          right={8}
          zIndex={999}
          colorScheme="brand"
          variant="solid"
          size="lg"
          rounded="full"
          shadow="lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </MotionIconButton>
      )}
    </AnimatePresence>
  );
}
