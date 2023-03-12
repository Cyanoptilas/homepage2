"use client";

import { Box, ChakraProvider, VStack } from "@chakra-ui/react";
// import { Top, Navbar2 } from "@/components/export";
import { Top, WithSubnavigation } from "@/components/lv3/export";

import { useState } from "react";
import BarNo1 from "@/components/lv3/bar_no1";
import BarLogoScroll from "@/components/lv3/bar_logo_scroll";
import Annotation1 from "@/components/lv1/annotation1";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ChakraProvider>
      <WithSubnavigation />
      <VStack align={"center"} background={"white"}>
        <Top />
        <Box height={5} />
        <BarNo1 />
        <Box height={5} />
        <BarLogoScroll />
        <Annotation1 />
        <Box height={20} width={"100%"} background={"blackAlpha.100"} />
        <Box height={5} />
      </VStack>
    </ChakraProvider>
  );
}
