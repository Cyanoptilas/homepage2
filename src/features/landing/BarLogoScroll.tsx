import React from "react";
import { Box, Image, keyframes } from "@chakra-ui/react";

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

function BarLogoScroll() {
  return (
    <Box width="100%" height="200px" overflow="hidden" position="relative">
      <Box
        width="800%"
        display="flex"
        animation={`${scrollAnimation} 22s linear infinite`}
      >
        <LogoImage />
        <LogoImage />
      </Box>
    </Box>
  );
}

function LogoImage() {
  return (
    <Image
      src="/image/logo/logo-slide.png"
      alt="ロゴスライド"
      width="50%"
      height="100%"
      objectFit="cover"
    />
  );
}

export { BarLogoScroll };

// src="/image/logo/logo-slide.png"
// alt="ロゴスライド"
