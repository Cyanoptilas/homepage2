"use client";

import {
  Box,
  ChakraProvider,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
// import { Top, Navbar2 } from "@/components/export";
import {
  Top,
  WithSubnavigation,
  BarNo1,
  BarLogoScroll,
  BarServiceOutline,
  Availability,
} from "@/components/lv3/export";

import { useState } from "react";
import Annotation1 from "@/components/lv1/annotation1";
import FloatingButtonTrial from "@/components/lv1/floating_button_trial";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ChakraProvider>
      <FloatingButtonTrial />

      <WithSubnavigation />
      <VStack align={"center"} background={"white"}>
        <Top />
        <Box height={5} />
        <BarNo1 />
        <Box height={5} />
        <BarLogoScroll />
        <Annotation1 />
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
