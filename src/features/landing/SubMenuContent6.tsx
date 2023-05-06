import { Box, Flex, HStack, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { useHoveredMenuItem } from "./HeaderContainer";

function SubMenuContent6() {
  const [value, setValue] = useHoveredMenuItem();
  const subMenuIndex = "6";
  if (value === subMenuIndex) {
    return (
      <Box>
        <HStack spacing="60px">
          <Link>
            <Flex
              as="a"
              width="340px"
              height="280px"
              background="skyblue"
              position="relative"
            >
              <NextLink href="/about"></NextLink>
              <Flex
                as="a"
                width="110px"
                height="100px"
                background="pink"
                position="absolute"
                top="5px"
                left="55px"
              ></Flex>
            </Flex>
          </Link>
          <Link>
            <Flex as="a" width="340px" height="280px" background="skyblue">
              <NextLink href="/about"></NextLink>
            </Flex>
          </Link>
          <Link>
            <Flex as="a" width="340px" height="280px" background="skyblue">
              <NextLink href="/about"></NextLink>
            </Flex>
          </Link>
        </HStack>
      </Box>
    );
  } else {
    return <></>;
  }
}
export { SubMenuContent6 };
