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
        <BarNo1 />
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
