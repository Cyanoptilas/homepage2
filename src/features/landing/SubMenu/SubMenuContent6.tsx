import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
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
              <Flex height="70px" width="150px" background="orange">
                <Image
                  src="/image/picture/img_useful_documents.png"
                  alt="img_top"
                  height="70px"
                  width="150px"
                  fit="cover"
                  align="top"
                  position="absolute"
                />
              </Flex>
            </Flex>
          </Link>
          <Link>
            <Flex as="a" width="340px" height="280px" background="skyblue">
              <NextLink href="/about"></NextLink>
              <Flex height="20px" width="20px" background="transparent">
                <Image
                  src="/image/picture/icon_download.svg"
                  alt="img_top"
                  height="20px"
                  width="20px"
                />
              </Flex>
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
