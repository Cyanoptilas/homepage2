import type { IMenuItem } from "@/features/configs/site";
import { Box, List, ListItem, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

type Props1 = {
  item1?: IMenuItem;
  index1?: number;
  id?: string;
};

function SubMenuGrid({ item1, index1, id }: Props1) {
  return (
    <>
      {item1 && item1.items ? (
        <Box marginLeft="16px">
          <List
            display="grid"
            gridTemplateColumns={
              id && parseInt(id) >= 3 && parseInt(id) <= 4
                ? "184px 184px"
                : "184px 184px 184px 184px"
            }
            gap={index1 ? "14px 48px" : "12px 48px"}
          >
            {item1.items.map((item2, index2) => {
              return (
                <ListItem
                  key={item2.title}
                  whiteSpace="nowrap"
                  display="flex"
                  alignItems="flex-start"
                >
                  <NextLink href={item2.href} target="_blank">
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
                        top: "0.6em",
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
                      {item2.title.split(/(\n)/).map((item3, index3) => {
                        return (
                          <React.Fragment key={index3}>
                            {item3.match(/\n/) ? <br /> : item3}
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
}

export { SubMenuGrid };
