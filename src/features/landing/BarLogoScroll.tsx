"use client";
import React from "react";
import { Box, Image, keyframes } from "@chakra-ui/react";

const scrollAnimation = keyframes`
0% {
  background-position: 0 0;
}
100% {
  background-position: -4138px 0;
}
`;

function BarLogoScroll() {
  return (
    <Box
      height="127px"
      marginTop="30px"
      textAlign="center"
      boxSizing="border-box"
    >
      <Box
        animation={`${scrollAnimation} 46s linear infinite`}
        background="url(/image/logo/logo-slide.png) repeat-x 50%"
        backgroundSize="auto 100px"
        height="125px"
        width="100%"
      ></Box>
    </Box>
  );
}

export { BarLogoScroll };
