"use client";

import { Flex, Text, Icon } from "@chakra-ui/react";
import { Github } from "lucide-react";
import { useEffect } from "react";
import { useGithubCommits } from "@/hooks/useGithubCommits";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function AnimatedCounter({
  value,
  loading,
}: {
  value: number | null;
  loading: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (loading) {
      // Randomize numbers while loading
      const interval = setInterval(() => {
        count.set(Math.floor(Math.random() * 100)); // Random 0-99
      }, 100);
      return () => clearInterval(interval);
    } else if (value !== null) {
      // Animate to final value
      const animation = animate(count, value, { duration: 2, ease: "easeOut" });
      return animation.stop;
    }
  }, [value, count, loading]);

  return <motion.span>{rounded}</motion.span>;
}

export default function GithubStats() {
  const { commits, loading } = useGithubCommits();

  if (commits === null && !loading) return null; // Only return null if failed and done loading

  return (
    <Flex
      align="center"
      gap={2}
      bg="whiteAlpha.600"
      backdropFilter="blur(10px)"
      px={4}
      py={2}
      borderRadius="full"
      border="1px solid"
      borderColor="brand.300"
      color="brand.900"
      _dark={{
        bg: "whiteAlpha.100",
        borderColor: "whiteAlpha.200",
        color: "brand.200",
      }}
      mt={4}
      display="inline-flex"
    >
      <Icon as={Github} h={4} w={4} />
      <Text fontSize="sm" fontWeight="bold">
        <AnimatedCounter value={commits} loading={loading} /> commits this week
      </Text>
    </Flex>
  );
}
