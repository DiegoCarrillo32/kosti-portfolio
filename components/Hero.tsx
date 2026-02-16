"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Terminal } from "lucide-react";
import GithubStats from "./GithubStats";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <Box
      as="section"
      id="hero"
      minH="90vh"
      display="flex"
      alignItems="center"
      bgGradient="to-br"
      gradientFrom="brand.100"
      gradientTo="brand.200"
      _dark={{
        gradientFrom: "gray.900",
        gradientTo: "gray.800",
      }}
      position="relative"
      overflow="hidden"
    >
      {/* Abstract Background Shapes */}
      <Box
        position="absolute"
        top="-20%"
        right="-10%"
        w="600px"
        h="600px"
        bg="brand.300"
        borderRadius="full"
        filter="blur(100px)"
        opacity={0.5}
        _dark={{ opacity: 0.1, bg: "brand.500" }}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="400px"
        h="400px"
        bg="brand.400"
        borderRadius="full"
        filter="blur(80px)"
        opacity={0.4}
        _dark={{ opacity: 0.1, bg: "brand.600" }}
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack gap={8} align="flex-start" maxW="3xl">
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
          >
            <Icon as={Terminal} h={4} w={4} />
            <Text fontSize="sm" fontWeight="bold" letterSpacing="wide">
              HELLO_WORLD
            </Text>
          </Flex>

          <Heading
            as="h1"
            size={{ base: "4xl", md: "7xl" }}
            color="brand.900"
            _dark={{ color: "white" }}
            lineHeight="1"
            letterSpacing="tight"
          >
            <Box
              as="span"
              display="block"
              color="brand.600"
              _dark={{ color: "brand.400" }}
              fontSize="0.5em"
              mb={2}
              fontWeight="medium"
            >
              {t("greeting")}
            </Box>
            {t("name")}
          </Heading>

          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="brand.700"
            _dark={{ color: "gray.300" }}
            maxW="2xl"
            lineHeight="tall"
          >
            {t("role")}
          </Text>

          <GithubStats />

          <Flex gap={4} wrap="wrap">
            <Link href="mailto:diegocarrilloa@outlook.com">
              <Button
                size="xl"
                bg="brand.900"
                color="white"
                borderRadius="full"
                px={8}
                fontSize="lg"
                _hover={{
                  bg: "brand.800",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                _dark={{
                  bg: "brand.200",
                  color: "brand.900",
                  _hover: { bg: "brand.300" },
                }}
                transition="all 0.2s"
              >
                {t("contact")}{" "}
                <ArrowRight size={20} style={{ marginLeft: "8px" }} />
              </Button>
            </Link>
            <Button
              asChild
              size="xl"
              variant="outline"
              color="brand.900"
              borderColor="brand.900"
              borderRadius="full"
              px={8}
              fontSize="lg"
              bg="transparent"
              _hover={{
                bg: "brand.100",
                transform: "translateY(-2px)",
              }}
              _dark={{
                color: "brand.200",
                borderColor: "brand.200",
                _hover: { bg: "whiteAlpha.100" },
              }}
            >
              <a href="/CVDiegoC.pdf" target="_blank" rel="noopener noreferrer">
                {t("downloadResume")}
              </a>
            </Button>
          </Flex>
        </VStack>
      </Container>

      {/* Vibecoded Badge */}
      <Box
        position="absolute"
        bottom={4}
        right={4}
        opacity={0.6}
        _hover={{ opacity: 1 }}
        transition="opacity 0.2s"
        zIndex={10}
      >
        <Text
          fontSize="xs"
          fontWeight="medium"
          color="brand.600"
          _dark={{ color: "brand.400" }}
          letterSpacing="wider"
        >
          ✨ Vibecoded using Antigravity
        </Text>
      </Box>
    </Box>
  );
}
