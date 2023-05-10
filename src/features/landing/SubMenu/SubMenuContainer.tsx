import { Box } from "@chakra-ui/react";
import React from "react";
import { useHoveredMenuItem } from "../HeaderContainer";
import { SubMenuContainerInner } from "./SubMenuContainerInner";

export default function SubMenuContainer() {
  const [value, setValue] = useHoveredMenuItem();

  return (
    <Box
      height={
        value === "0"
          ? "0"
          : value === "1"
          ? "268px"
          : value === "2"
          ? "440px"
          : value === "6"
          ? "336px"
          : "102px"
      }
      width="100vw"
      borderTop={value != "0" ? "2px solid #f4f8f9" : "transparent"}
      position="fixed"
      top="72px"
      backgroundColor="#fff"
      overflow="hidden"
      boxShadow="0 0 6px rgba(0,0,0,.24)"
      zIndex="9"
      transition="all 0.3s ease-in-out"
    >
      <SubMenuContainerInner />
    </Box>
  );
}
