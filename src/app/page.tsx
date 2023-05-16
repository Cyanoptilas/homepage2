"use client";

import { Box, ChakraProvider, VStack } from "@chakra-ui/react";

import {
  Annotation,
  Availability,
  BarLogoScroll,
  BarNo1,
  BarServiceOutline,
  CapabilitiesArea,
  FloatingButtonTrial,
  HeaderContainer,
  Top,
} from "../features/index";

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useHoveredMenuItem } from "@/features/landing/HeaderContainer";
import customTheme from "@/features/configs/CustomTheme";
import { ButtonArea } from "@/features/landing/ButtonArea";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

export default function Home() {
  const [value, setValue] = useHoveredMenuItem();

  return (
    <ChakraProvider theme={customTheme}>
      <FloatingButtonTrial />

      <HeaderContainer />
      <Box onMouseEnter={() => setValue("0")}>
        <Top />
        <Box height="25px" />
        <BarNo1 />
        <Box height="10px" />
        <BarLogoScroll />
        <Annotation />
        <BarServiceOutline />
        <ButtonArea />
        <CapabilitiesArea />

        <VStack align={"center"} background="#f4f8f9">
          <Box height={10} />
          <Availability />
          <Box height={10} />
        </VStack>
      </Box>
    </ChakraProvider>
  );
}
