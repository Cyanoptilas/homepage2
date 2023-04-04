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
  Top,
} from "../features/index";

import { siteConfig } from "@/features/configs/site";

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ChakraProvider>
      <FloatingButtonTrial />

      <SubNavigation />
      <VStack align={"center"} background={"white"}>
        <Top />
        <Box height={5} />
        <BarNo1 />
        <Box height={5} />
        <Flex width={1000}>
          <BarLogoScroll />
        </Flex>
        <Annotation />
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
