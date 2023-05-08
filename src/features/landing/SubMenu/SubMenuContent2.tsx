import React, { useState } from "react";
import { Box, Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { siteConfig } from "../../configs/site";
import { useHoveredMenuItem } from "../HeaderContainer";
import { SubMenuListTitle } from "./SubMenuListTitle";
import { SubMenuGrid } from "./SabMenuGrid";

function SubMenuContent2() {
  const [value, setValue] = useHoveredMenuItem();
  const subMenuIndex = "2";
  const [hoveredNo, setHoveredNo] = useState(-1);

  const items = siteConfig.mainNav[parseInt(subMenuIndex) - 1].items!;

  if (value === subMenuIndex) {
    const index = 0;
    return (
      <Flex outline="0" textDecoration="none">
        <SubMenuListTitle
          hoveredNo={hoveredNo}
          index={index}
          setHoveredNo={setHoveredNo}
        />

        <Box>
          {items.map((item1, index1) => {
            return (
              <>
                <Box
                  margin="0 0 20px"
                  fontSize="14px"
                  fontWeight="700"
                  lineHeight="1"
                  marginTop={index1 >= 1 ? "40px" : "0"}
                >
                  <Text
                    position="relative"
                    fontWeight="700"
                    lineHeight="1"
                    paddingRight="28px"
                    textDecoration="none"
                    color="#4c4c4c"
                    transition="color .2s"
                  >
                    {item1.title}
                  </Text>
                </Box>

                <SubMenuGrid item1={item1} index1={index1} />
              </>
            );
          })}
        </Box>
      </Flex>
    );
  } else {
    return <></>;
  }
}
export { SubMenuContent2 };
