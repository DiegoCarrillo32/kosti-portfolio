"use client";

import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";

const ColorModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Wrap in setTimeout to avoid 'setState synchronously within an effect' warning
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <IconButton
      aria-label="Toggle color mode"
      onClick={toggleTheme}
      variant="ghost"
      color="brand.700"
      _hover={{ bg: "brand.100", color: "brand.900" }}
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </IconButton>
  );
};

export default function Navbar() {
  const t = useTranslations("Navbar");

  const links = [
    { name: t("about"), href: "#about" },
    { name: t("projects"), href: "#projects" },
    { name: t("experience"), href: "#experience" },
    { name: t("technologies"), href: "#technologies" },
    { name: t("skills"), href: "#skills" },
  ];

  return (
    <Box
      as="nav"
      bg="whiteAlpha.900"
      backdropFilter="blur(16px)"
      borderBottom="1px solid"
      borderColor="brand.200"
      py={4}
      position="sticky"
      top={0}
      zIndex={100}
      _dark={{ bg: "gray.900", borderColor: "gray.800" }}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link href="/">
            <Box position="relative" w="50px" h="50px">
              <Image
                src="/icon-512x512.png"
                alt="Diego Carrillo Logo"
                fill
                style={{ objectFit: "contain" }}
                sizes="50px"
              />
            </Box>
          </Link>

          <HStack gap={8} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <ChakraLink
                key={link.name}
                href={link.href}
                color="brand.700"
                _hover={{ color: "brand.900", textDecoration: "none" }}
                _dark={{ color: "gray.300", _hover: { color: "white" } }}
                fontWeight="medium"
                fontSize="sm"
              >
                {link.name}
              </ChakraLink>
            ))}
            <HStack gap={2}>
              <ColorModeToggle />
              <LanguageSwitcher />
            </HStack>
          </HStack>

          <Box display={{ base: "block", md: "none" }}>
            {/* Mobile Menu implementation simplified for now */}
            <HStack gap={2}>
              <ColorModeToggle />
              <LanguageSwitcher />
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
