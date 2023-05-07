import { Box, Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState } from "react";
import { siteConfig } from "../../configs/site";
import { useHoveredMenuItem } from "../HeaderContainer";

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
                

                {item.items ? (
                  <Box marginLeft="16px">
                    <List
                      display="grid"
                      gridTemplateColumns="184px 184px 184px 184px"
                      gap="12px 48px"
                    >
                      {item.items.map((item, index) => {
                        return (
                          <ListItem
                            key={index + item.title}
                            whiteSpace="nowrap"
                            display="flex"
                            alignItems="flex-start"
                          >
                            <NextLink href={item.href}>
                              <Text
                                textDecoration="none"
                                position="relative"
                                display="block"
                                paddingLeft="16px"
                                fontWeight="400"
                                fontSize="14px"
                                color="#4c4c4c"
                                paddingBottom="2px"
                                backgroundImage="linear-gradient(#00c4cc,#00c4cc)"
                                backgroundSize="0 1px"
                                backgroundPosition="left 16px bottom"
                                backgroundRepeat="no-repeat"
                                transition="color .3s ease,background-size .3s ease"
                                lineHeight="1.43"
                                _hover={{
                                  color: "#00c4cc",
                                  backgroundSize: "100% 1px",
                                }}
                                _before={{
                                  content: '""',
                                  position: "absolute",
                                  width: "8px",
                                  height: "2px",
                                  backgroundColor: "#00c4cc",
                                  top: "0.6em", //"0.675em",
                                  left: "0px",
                                }}
                              >
                                {item.title.split(/(\n)/).map((item, index) => {
                                  return (
                                    <React.Fragment key={index}>
                                      {item.match(/\n/) ? <br /> : item}
                                    </React.Fragment>
                                  );
                                })}
                              </Text>
                            </NextLink>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Box>
                ) : (
                  <></>
                )}
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
