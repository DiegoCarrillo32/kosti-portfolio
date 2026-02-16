"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const t = useTranslations("Experience");
  const jobKeys = ["konrad", "plan21", "nativo"] as const;

  return (
    <Box
      as="section"
      id="experience"
      py={32}
      bg="white"
      _dark={{ bg: "gray.900" }}
    >
      <Container maxW="container.xl">
        <Section>
          <Flex align="center" gap={4} mb={16}>
            <Box
              p={3}
              bg="brand.100"
              _dark={{ bg: "whiteAlpha.100", color: "brand.200" }}
              borderRadius="xl"
              color="brand.900"
            >
              <Briefcase size={32} />
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

          <VStack gap={12} align="stretch" position="relative">
            {/* Thread line visual */}
            <Box
              position="absolute"
              left={{ base: "20px", md: "50%" }}
              top="0"
              bottom="0"
              w="2px"
              bg="brand.200"
              _dark={{ bg: "gray.700" }}
              transform="translateX(-50%)"
              zIndex={0}
            />

            {jobKeys.map((key, index) => (
              <Section
                key={key}
                delay={index * 0.2}
                style={{ zIndex: 1, position: "relative" }}
              >
                <Flex
                  direction={{
                    base: "column",
                    md: index % 2 === 0 ? "row" : "row-reverse",
                  }}
                  gap={8}
                  align="center"
                  position="relative"
                  zIndex={1}
                >
                  {/* Content Card */}
                  <Box flex={1} w="full">
                    <Box
                      bg="white"
                      p={8}
                      borderRadius="2xl"
                      boxShadow="xl"
                      border="1px solid"
                      borderColor="brand.100"
                      _dark={{
                        bg: "gray.800",
                        borderColor: "gray.700",
                        boxShadow: "none",
                      }}
                      _hover={{
                        borderColor: "brand.300",
                        transform: "translateY(-4px)",
                        _dark: { borderColor: "brand.500" },
                        zIndex: 10,
                        position: "relative",
                      }}
                      transition="all 0.3s"
                    >
                      <Badge
                        colorPalette="teal"
                        mb={2}
                        display={{ base: "inline-block", md: "none" }}
                      >
                        {t(`jobs.${key}.date`)}
                      </Badge>
                      <Heading
                        as="h3"
                        size="lg"
                        color="brand.900"
                        _dark={{ color: "white" }}
                        mb={1}
                      >
                        {t(`jobs.${key}.role`)}
                      </Heading>
                      <Text
                        fontSize="md"
                        fontWeight="bold"
                        color="brand.600"
                        _dark={{ color: "brand.200" }}
                        mb={4}
                      >
                        {t(`jobs.${key}.company`)}
                      </Text>
                      <VStack align="start" gap={2} pl={4}>
                        <ul
                          style={{ listStyleType: "disc", paddingLeft: "1rem" }}
                        >
                          {(t.raw(`jobs.${key}.description`) as string[]).map(
                            (desc, i) => (
                              <li
                                key={i}
                                style={{
                                  marginBottom: "8px",
                                }}
                              >
                                <Text
                                  as="span"
                                  color="gray.600"
                                  _dark={{ color: "gray.300" }}
                                >
                                  {desc}
                                </Text>
                              </li>
                            ),
                          )}
                        </ul>
                      </VStack>
                    </Box>
                  </Box>

                  {/* Date (Desktop) - Replaces Spacer */}
                  <Box
                    flex={1}
                    display={{ base: "none", md: "flex" }}
                    justifyContent={index % 2 === 0 ? "flex-start" : "flex-end"}
                    alignItems="center"
                    px={8}
                  >
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      color="brand.400"
                      _dark={{ color: "brand.600" }}
                    >
                      {t(`jobs.${key}.date`)}
                    </Text>
                  </Box>
                </Flex>
              </Section>
            ))}
          </VStack>
        </Section>
      </Container>
    </Box>
  );
}
