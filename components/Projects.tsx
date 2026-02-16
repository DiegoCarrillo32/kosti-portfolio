"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Badge,
  VStack,
  HStack,
  Button,
  Icon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { ExternalLink } from "lucide-react";
import Section from "./ui/Section";
import { motion } from "framer-motion";

const MotionLinkBox = motion(LinkBox);

const PROJECTS = [
  {
    id: "portfolio",
    url: "https://diegocarrillo.com",
    method: "ai",
  },
  {
    id: "cafedostazas",
    url: "https://cafedostazas.com",
    method: "organic",
  },
  {
    id: "samanthazul",
    url: "https://www.samanthazul.com/", // Placeholder
    method: "organic",
  },
  {
    id: "volcanicvillas",
    url: "https://www.arenalvolcanicvillas.com/", // Placeholder
    method: "organic",
  },
];

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <Box
      as="section"
      id="projects"
      py={20}
      bg="gray.50"
      _dark={{ bg: "gray.900" }}
    >
      <Container maxW="container.xl">
        <Section>
          <VStack gap={12} align="stretch">
            <Heading
              as="h2"
              size="2xl"
              textAlign="center"
              color="brand.900"
              _dark={{ color: "white" }}
            >
              {t("title")}
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
              {PROJECTS.map((project) => (
                <MotionLinkBox
                  key={project.id}
                  _dark={{ bg: "whiteAlpha.50", borderColor: "whiteAlpha.100" }} // Improved dark mode contrast
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="xl"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  border="1px solid"
                  borderColor="gray.100"
                >
                  {/* Live Preview / IFrame Window */}
                  <Box
                    position="relative"
                    w="100%"
                    h="250px"
                    bg="gray.100"
                    overflow="hidden"
                    borderBottom="1px solid"
                    borderColor="gray.100"
                    _dark={{ borderColor: "whiteAlpha.100", bg: "gray.800" }}
                    data-group
                  >
                    {/* IFrame Scaled Container */}
                    <Box
                      w="400%" // 4x width to scale down by 0.25
                      h="400%" // 4x height
                      style={{
                        transform: "scale(0.25)",
                        transformOrigin: "0 0",
                      }}
                    >
                      <iframe
                        src={project.url}
                        title={`Preview of ${project.id}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                          pointerEvents: "none", // Disable interaction within iframe
                        }}
                        loading="lazy"
                      />
                    </Box>

                    {/* Overlay on Hover */}
                    <Box
                      position="absolute"
                      inset={0}
                      bg="blackAlpha.600"
                      opacity={0}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      transition="opacity 0.2s"
                      _groupHover={{ opacity: 1 }}
                      zIndex={10}
                    >
                      <Button
                        asChild
                        colorScheme="brand"
                        size="lg"
                        variant="solid"
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("visit")} <Icon as={ExternalLink} ml={2} />
                        </a>
                      </Button>
                    </Box>

                    {/* Method Badge */}
                    <Badge
                      position="absolute"
                      top={4}
                      right={4}
                      bg={project.method === "ai" ? "purple.500" : "green.500"}
                      color="white"
                      variant="solid"
                      fontSize="xs"
                      px={2}
                      py={1}
                      borderRadius="md"
                      zIndex={20}
                      boxShadow="lg"
                    >
                      {t(`methods.${project.method}`)}
                    </Badge>
                  </Box>

                  {/* Content */}
                  <VStack align="start" p={8} gap={4}>
                    <Heading
                      as="h3"
                      size="lg"
                      color="brand.900"
                      _dark={{ color: "white" }}
                    >
                      <LinkOverlay
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t(`list.${project.id}.title`)}
                      </LinkOverlay>
                    </Heading>

                    <Text color="gray.600" _dark={{ color: "gray.300" }}>
                      {t(`list.${project.id}.description`)}
                    </Text>

                    <HStack wrap="wrap" pt={2}>
                      {(t.raw(`list.${project.id}.tech`) as string[]).map(
                        (tech) => (
                          <Badge
                            key={tech}
                            colorScheme="brand"
                            variant="subtle"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="xs"
                          >
                            {tech}
                          </Badge>
                        ),
                      )}
                    </HStack>
                  </VStack>
                </MotionLinkBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Section>
      </Container>
    </Box>
  );
}
