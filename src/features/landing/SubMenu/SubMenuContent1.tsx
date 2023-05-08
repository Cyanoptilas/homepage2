import { Box, Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import { siteConfig } from "../../configs/site";
import { useHoveredMenuItem } from "../HeaderContainer";
import { SubMenuGrid } from "./SabMenuGrid";
import { SubMenuListTitle } from "./SubMenuListTitle";

function SubMenuContent1() {
  const [value, setValue] = useHoveredMenuItem();
  const subMenuIndex = "1";

  const [hoveredNo, setHoveredNo] = useState(-1);

  const items = siteConfig.mainNav[parseInt(subMenuIndex) - 1].items!;

  if (value === subMenuIndex) {
    return (
      <Box outline="0" textDecoration="none">
        <Box>
          {items.map((item, index) => {
            return (
              <>
                <SubMenuListTitle
                  item={item}
                  hoveredNo={hoveredNo}
                  index={index}
                  setHoveredNo={setHoveredNo}
                />

                <SubMenuGrid item1={item} />
              </>
            );
          })}
        </Box>
      </Box>
    );
  } else {
    return <></>;
  }
}
export { SubMenuContent1 };
