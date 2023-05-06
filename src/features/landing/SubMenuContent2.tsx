import React, { useState } from "react";
import { Box, Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { siteConfig } from "../configs/site";
import { useHoveredMenuItem } from "./HeaderContainer";

function SubMenuContent2() {
  // function SubMenuContent1({subMenuIndex}:{subMenuIndex: string}) {
  const [value, setValue] = useHoveredMenuItem();
  const subMenuIndex = "2";
  const [hoveredNo1, setHoveredNo1] = useState(-1);

  const items = siteConfig.mainNav[parseInt(subMenuIndex) - 1].items!;

  if (value === subMenuIndex) {
    return (
      <Flex outline="0" textDecoration="none">
        <Flex // List Title
          flexShrink="0"
          display="flex"
          flexDirection="column"
          marginRight="72px"
        >
          <NextLink href="https://smarthr.jp/function/">
            <Text
              as="a"
              fontSize="20px"
              position="relative"
              fontWeight="700"
              lineHeight="1"
              paddingRight="28px"
              textDecoration="none"
              color={hoveredNo1 === 1 ? "#00c4cc" : "#4c4c4c"}
              transition="color .2s"
              onMouseEnter={() => setHoveredNo1(1)}
              onMouseLeave={() => setHoveredNo1(-1)}
              _before={{
                content: "''",
                position: "absolute",
                width: "20px",
                height: "20px",
                top: "50%",
                right: hoveredNo1 === 1 ? "-12px" : "0px",
                transform: "translateY(-50%)",
                margin: "1px 0 0",
                backgroundImage: "url(/image/picture/icon_arrowRight_blue.svg)",
                backgroundPosition: "50%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                transition: "right .2s",
              }}
            >
              機能一覧
            </Text>
          </NextLink>
        </Flex>
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

                {item.items ? (
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
                )}
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
