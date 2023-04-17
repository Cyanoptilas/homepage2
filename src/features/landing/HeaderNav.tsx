import { Flex } from "@chakra-ui/react";
import HeaderNavLeft from "./HeaderNavLeft";
import HeaderNavRight from "./HeaderNavRight";

export default function HeaderNav() {
  return (
    <Flex
      flexGrow="1"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <HeaderNavLeft />
      <HeaderNavRight />
    </Flex>
  );
}

export { HeaderNav };
