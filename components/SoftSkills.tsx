"use client";

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import { Sparkles } from "lucide-react";

export default function SoftSkills() {
  const t = useTranslations("Skills");
  // Hack to get array from messages without knowing length
  // We can assume a fixed reasonable number or just try to render
  const skills = [0, 1, 2, 3]
    .map((i) => {
      try {
        const title = t(`list.${i}.title`);
        const description = t(`list.${i}.description`);
        if (title === `list.${i}.title`) return null;
        return { title, description };
      } catch {
        return null;
      }
    })
    .filter(Boolean);

  return (
    <Box
      as="section"
      id="skills"
      py={32}
      bg="brand.900"
      _dark={{ bg: "black" }}
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Background blobs */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        bgGradient="radial(circle at 30% 20%, brand.800, transparent)"
        _dark={{
          bgGradient: "radial(circle at 30% 20%, gray.900, transparent)",
        }}
        opacity={0.4}
      />

      <Container maxW="container.xl" position="relative">
        <Section>
          <Flex align="center" gap={4} mb={16} justify="center">
            <Box p={3} bg="whiteAlpha.200" borderRadius="xl" color="brand.200">
              <Sparkles size={32} />
            </Box>
            <Heading as="h2" size="2xl" color="white">
              {t("title")}
            </Heading>
          </Flex>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={6}
            autoRows="minmax(200px, auto)"
          >
            {skills.map((skill, index) => {
              // Custom span logic based on index
              // Index 0: Row 1, Col 1 (2 rows span)
              // Index 1: Row 1, Col 2 (1 row)
              // Index 2: Row 2, Col 2 (1 row)
              // Index 3: Row 3, Col 1-2 (2 cols span)
              // Others: Default

              let colSpan = 1;
              let rowSpan = 1;

              if (index === 0) rowSpan = 2;
              if (index === 3) colSpan = 2;

              return (
                <GridItem
                  key={index}
                  colSpan={{ base: 1, md: colSpan }}
                  rowSpan={{ base: 1, md: rowSpan }}
                >
                  <Section delay={index * 0.1} style={{ height: "100%" }}>
                    <Box
                      p={8}
                      bg="whiteAlpha.100"
                      borderRadius="2xl"
                      backdropFilter="blur(12px)"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      _hover={{
                        bg: "whiteAlpha.200",
                        transform: "translateY(-4px)",
                      }}
                      transition="all 0.3s"
                      cursor="default"
                      h="full"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        mb={4}
                        color="brand.200"
                      >
                        {skill?.title}
                      </Text>
                      <Text color="gray.300" lineHeight="relaxed">
                        {skill?.description}
                      </Text>
                    </Box>
                  </Section>
                </GridItem>
              );
            })}
          </Grid>
        </Section>
      </Container>
    </Box>
  );
}
