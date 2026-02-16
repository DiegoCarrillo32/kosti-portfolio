"use client";

import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";

export default function About() {
  const t = useTranslations("About");
  return (
    <Box as="section" id="about" py={32} bg="white" _dark={{ bg: "gray.900" }}>
      <Container maxW="container.xl">
        <Section>
          <Heading
            as="h2"
            size="2xl"
            mb={8}
            color="brand.900"
            _dark={{ color: "white" }}
          >
            {t("title")}
          </Heading>
          <Text
            fontSize="2xl"
            color="brand.700"
            _dark={{ color: "gray.300" }}
            maxW="4xl"
            lineHeight="tall"
            fontWeight="light"
          >
            {t("content")}
          </Text>
        </Section>
      </Container>
    </Box>
  );
}
