"use client";

import { Box, ChakraProvider, Flex, VStack } from "@chakra-ui/react";

import { useState } from "react";
import {
  Annotation,
  Availability,
  BarLogoScroll,
  BarNo1,
  BarServiceOutline,
  FloatingButtonTrial,
  SubNavigation,
  HeaderContainer,
  Top,
} from "../features/index";

import { siteConfig } from "@/features/configs/site";

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useHoveredMenuItem } from "@/features/landing/HeaderContainer";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

export default function Home() {
  const [value, setValue] = useHoveredMenuItem();

  return (
    <ChakraProvider>
      <FloatingButtonTrial />

      <HeaderContainer />
      <VStack align={"center"} background={"white"}>
        <Box onMouseEnter={() => setValue("0")}>
          <Top />
          <Box height={5} />
          <BarNo1 />
          <Box height={5} />
          <BarLogoScroll />
          <Annotation />
        </Box>
      </VStack>
      <VStack align={"center"} background={"blackAlpha.100"}>
        <Box height={20} />
        <BarServiceOutline />
        <Box height={10} />
        <Availability />
        <Box height={10} />
      </VStack>
    </ChakraProvider>
  );
}
