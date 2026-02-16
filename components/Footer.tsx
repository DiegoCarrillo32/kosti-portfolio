"use client";

import { Box, Container, Text, HStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <Box
      as="footer"
      py={10}
      bg="brand.900"
      _dark={{ bg: "black", borderColor: "gray.800", color: "gray.400" }}
      color="brand.300"
      borderTop="1px solid"
      borderColor="brand.800"
    >
      <Container maxW="container.xl">
        <HStack justify="space-between" flexWrap="wrap" gap={4}>
          <Text>
            &copy; {new Date().getFullYear()} Diego Carrillo Arroyo.{" "}
            {t("rights")}
          </Text>
          <HStack gap={6}>
            <a
              href="https://github.com/DiegoCarrillo32"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/diegocarrillodev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:diegocarrilloa@outlook.com">
              <Mail size={20} />
            </a>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
