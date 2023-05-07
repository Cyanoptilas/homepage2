import { Box, Flex, HStack, Link, List, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { useHoveredMenuItem } from "../HeaderContainer";

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
              display="grid"
              gridTemplateColumns={"100px 100px 100px 100px"}
              gridTemplateRows={"100px 100px 100px 100px"}
              gridGap="3px"
            >
              <NextLink href="/about"></NextLink>
              <Flex width="100px" height="100px" background="pink"></Flex>
              <Flex width="100px" height="100px" background="orange"></Flex>
              <Flex width="100px" height="100px" background="turquoise"></Flex>
              <Flex width="100px" height="100px" background="yellow"></Flex>
              <Flex width="100px" height="100px" background="purple"></Flex>
              <Flex width="100px" height="100px" background="pink"></Flex>
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
