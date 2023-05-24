"use client";

import { Box } from "@chakra-ui/react";

import {
  Annotation,
  CompaniesLogoSlide,
  BarNo1,
  BarServiceOutline,
  CapabilitiesArea,
  FloatingButtonTrial,
  HeaderContainer,
  Top,
  ButtonArea,
} from "../features/index";
import { useHoveredMenuItem } from "@/features/landing/HeaderContainer";

export default function Home() {
  const [value, setValue] = useHoveredMenuItem();

  return (
    <>
      <FloatingButtonTrial />

      <HeaderContainer />
      <Box onMouseEnter={() => setValue("0")}>
        <Top />
        <BarNo1 />
        <CompaniesLogoSlide />
        <Annotation />
        <BarServiceOutline />
        <ButtonArea />
        <CapabilitiesArea />
      </Box>
    </>
  );
}
