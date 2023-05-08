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
          {items.map((item, index1) => {
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
                    {item.title}
                  </Text>
                </Box>

                <SubMenuGrid item1={item} index1={index1} />
                {/* {item.items ? (
                  <Box marginLeft="16px">
                    <List
                      display="grid"
                      gridTemplateColumns="184px 184px 184px 184px"
                      gap="12px 48px"
                      rowGap="14px"
                    >
                      {item.items.map((item, index2) => {
                        return (
                          <ListItem
                            key={index2 + item.title}
                            whiteSpace="nowrap"
                            display="flex"
                            alignItems="flex-start"
                          >
                            <NextLink href={item.href} target="_blank">
                              <Text
                                textDecoration="none"
                                display="block"
                                position="relative"
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
                                _hover={
                                  index1 === 2 && index2 === 0
                                    ? {
                                        color: "#00c4cc",
                                        backgroundSize: "80% 1px",
                                      }
                                    : {
                                        color: "#00c4cc",
                                        backgroundSize: "100% 1px",
                                      }
                                }
                                _before={{
                                  content: '""',
                                  position: "absolute",
                                  width: "8px",
                                  height: "2px",
                                  backgroundColor: "#00c4cc",
                                  top: "0.6em", //"0.675em",
                                  left: "0px",
                                }}
                                _after={
                                  index1 === 2 && index2 === 0
                                    ? {
                                        content: '""',
                                        display: "inline-block",
                                        width: "12px",
                                        height: "12px",
                                        margin: "5px 0 0 4px",
                                        backgroundImage:
                                          "url(/image/picture/icon_blank_black.svg)",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "50%",
                                        backgroundSize: "contain",
                                      }
                                    : {}
                                }
                              >
                                {item.title}
                              </Text>
                            </NextLink>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Box>
                ) : (
                  <></>
                )} */}
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
