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
  Subnavigation,
  Top,
} from "../features/index";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ChakraProvider>
      <FloatingButtonTrial />

      <Subnavigation />
      <VStack align={"center"} background={"white"}>
        <Top />
        <Box height={5} />
        <BarNo1 />
        <Box height={5} />
        <Flex width={1000
        }>
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
