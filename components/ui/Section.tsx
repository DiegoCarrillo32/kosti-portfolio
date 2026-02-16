"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface SectionProps extends BoxProps {
  children: ReactNode;
  delay?: number;
}

export default function Section({
  children,
  delay = 0,
  ...props
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box ref={ref} {...props}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        style={{ height: "100%" }}
      >
        {children}
      </motion.div>
    </Box>
  );
}
