"use client";

import Availability from "@/components/availability";
import BarServiceOutline from "@/components/bar_service_outline";
import FloatingButtonTrial from "@/components/floating_button_trial";
import Annotation1 from "@/components/main/annotation";
import BarLogoScroll from "@/components/main/bar_logo_scroll";
import BarNo1 from "@/components/main/bar_no1";
import Top from "@/components/main/top";
import Subnavigation from "@/components/nav_ber";

import { Box, ChakraProvider, VStack } from "@chakra-ui/react";

import { useState } from "react";

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
