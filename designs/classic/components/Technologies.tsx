"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiKotlin,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiReact,
  SiAngular,
  SiSpringboot,
  SiExpress,
  SiAndroid,
  SiJetpackcompose,
  SiGit,
  SiMongodb,
  SiDocker,
  SiGraphql,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava, FaMicrosoft } from "react-icons/fa";
import Section from "./Section";
import { Layers } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { TECHNOLOGIES } from "@/content/cv";

const TECH_ICONS: Record<string, React.ElementType> = {
  Java: FaJava,
  Kotlin: SiKotlin,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  SQL: SiMysql,
  React: SiReact,
  Angular: SiAngular,
  "Spring Boot": SiSpringboot,
  Express: SiExpress,
  Android: SiAndroid,
  Compose: SiJetpackcompose,
  Git: SiGit,
  MongoDB: SiMongodb,
  "Azure (Microsoft)": FaMicrosoft,
  Docker: SiDocker,
  GraphQL: SiGraphql,
  Tailwind: SiTailwindcss,
};

const Marquee = ({
  children,
  direction = 1,
  speed = 40, // Slower default
}: {
  children: React.ReactNode;
  direction?: number;
  speed?: number;
}) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startAnimation = () => {
      controls.start({
        x: direction === 1 ? [-1000, 0] : [0, -1000],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed, // Higher value = slower
            ease: "linear",
          },
        },
      });
    };
    startAnimation();
  }, [controls, direction, speed]);

  return (
    <Box
      overflow="hidden"
      whiteSpace="nowrap"
      position="relative"
      w="full"
      ref={containerRef}
    >
      <motion.div animate={controls} style={{ display: "flex", gap: "2rem" }}>
        {children}
        {/* Duplicate children with modified keys to avoid console errors */}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { key: `${child.key}-dup` });
          }
          return child;
        })}
      </motion.div>
    </Box>
  );
};

export default function Technologies() {
  const t = useTranslations("Technologies");


  const TechCard = ({
    name,
    icon,
  }: {
    name: string;
    icon: React.ElementType;
  }) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ cursor: "grab" }}
    >
      <VStack
        minW="120px"
        p={4}
        bg="transparent"
        borderRadius="xl"
        transition="all 0.3s"
        filter="grayscale(100%)"
        opacity={0.7}
        _hover={{
          filter: "grayscale(0%)",
          opacity: 1,
          bg: "whiteAlpha.200",
        }}
      >
        <Icon as={icon} fontSize="4xl" color="brand.600" />
        <Text
          fontWeight="bold"
          fontSize="xs"
          color="brand.800"
          _dark={{ color: "brand.200" }}
        >
          {name}
        </Text>
      </VStack>
    </motion.div>
  );

  return (
    <Box
      as="section"
      id="technologies"
      py={32}
      bg="brand.100"
      _dark={{ bg: "gray.900" }}
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.xl">
        <Section>
          <Flex align="center" gap={4} mb={16} justify="center">
            <Box
              p={3}
              bg="brand.100"
              borderRadius="xl"
              color="brand.900"
              _dark={{ bg: "whiteAlpha.100", color: "brand.200" }}
              boxShadow="sm"
            >
              <Layers size={32} />
            </Box>
            <Heading
              as="h2"
              size="2xl"
              color="brand.900"
              _dark={{ color: "white" }}
            >
              {t("title")}
            </Heading>
          </Flex>

          <VStack gap={16} align="stretch">
            <Box>
              <Heading
                as="h3"
                size="lg"
                mb={8}
                color="brand.600"
                textAlign="center"
                textTransform="uppercase"
                letterSpacing="widest"
              >
                {t("languages")}
              </Heading>
              <Marquee direction={-1} speed={50}>
                {TECHNOLOGIES.languages.map((name) => (
                  <TechCard key={name} name={name} icon={TECH_ICONS[name]} />
                ))}
              </Marquee>
            </Box>

            <Box>
              <Heading
                as="h3"
                size="lg"
                mb={8}
                color="brand.600"
                textAlign="center"
                textTransform="uppercase"
                letterSpacing="widest"
              >
                {t("frameworks")}
              </Heading>
              <Marquee direction={1} speed={60}>
                {TECHNOLOGIES.frameworks.map((name) => (
                  <TechCard key={name} name={name} icon={TECH_ICONS[name]} />
                ))}
              </Marquee>
            </Box>

            <Box>
              <Heading
                as="h3"
                size="lg"
                mb={8}
                color="brand.600"
                textAlign="center"
                textTransform="uppercase"
                letterSpacing="widest"
              >
                {t("tools")}
              </Heading>
              <Marquee direction={-1} speed={70}>
                {TECHNOLOGIES.tools.map((name) => (
                  <TechCard key={name} name={name} icon={TECH_ICONS[name]} />
                ))}
              </Marquee>
            </Box>
          </VStack>
        </Section>
      </Container>
    </Box>
  );
}
