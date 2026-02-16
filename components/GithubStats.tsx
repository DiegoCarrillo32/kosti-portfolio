"use client";

import { Flex, Text, Icon } from "@chakra-ui/react";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";
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
  const [commits, setCommits] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const response = await fetch(
          "https://api.github.com/users/DiegoCarrillo32/events/public",
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();

        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        let commitCount = 0;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.forEach((event: any) => {
          if (
            event.type === "PushEvent" &&
            new Date(event.created_at) > oneWeekAgo
          ) {
            // detailed payload (commits array) might be missing for some events
            if (event.payload.size) {
              commitCount += event.payload.size;
            } else if (event.payload.commits) {
              commitCount += event.payload.commits.length;
            } else {
              // Fallback: A PushEvent is at least 1 commit
              commitCount += 1;
            }
          }
        });

        setCommits(commitCount);
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setCommits(null);
      } finally {
        setLoading(false);
      }
    }

    fetchCommits();
  }, []);

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
