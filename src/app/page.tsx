"use client";

import { Box } from "@chakra-ui/react";

import {
  Annotation,
  BarLogoScroll,
  BarNo1,
  BarServiceOutline,
  CapabilitiesArea,
  FloatingButtonTrial,
  HeaderContainer,
  Top,
  ButtonArea,
} from "../features/index";
import { useHoveredMenuItem } from "@/features/landing/HeaderContainer";

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/features/configs/CustomTheme";

export default function Home() {
  const [value, setValue] = useHoveredMenuItem();

  return (
    <>
      {/* <ChakraProvider theme={customTheme}> */}
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
      </Box>
      {/* </ChakraProvider> */}
    </>
  );
}
