import { Box, Flex, Text } from "@chakra-ui/react";
import { HeaderLogo } from "../ui/index";
import { HeaderNav } from "./HeaderNav";

export default function HeaderContainer() {
  return (
    <Box
      boxSizing="border-box"
      background="#00c4cc"
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      zIndex="1000"
      backgroundColor="transparent"
      transition="background-color .3s ease"
    >
      <Box
        maxWidth="1366px"
        height="72px"
        padding="0px 50px"
        margin="auto"
        display="flex"
        alignItems="center"
      >
        <HeaderLogo color="white" />
        <HeaderNav />
      </Box>
    </Box>
  );
}

export { HeaderContainer };
