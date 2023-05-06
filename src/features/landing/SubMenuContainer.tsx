import { Box, List, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { siteConfig } from "../configs/site";
import { useHoveredMenuItem } from "./HeaderContainer";
import SubMenuContainerInner from "./SubMenuContainerInner";

export default function SubMenuContainer() {
  const [value, setValue] = useHoveredMenuItem();

  return (
    <Box // megaMenu__inner
      height={
        value === "0"
          ? "0"
          : value === "1"
          ? "268px"
          : value === "2"
          ? "440px"
          : value === "6"
          ? "336px"
          : "102px"
      }
      width="100vw"
      borderTop="2px solid #f4f8f9"
      position="fixed"
      top={value != "0" ? "72px" : "0"}
      backgroundColor="#fff"
      overflow="hidden"
      boxShadow="0 0 6px rgba(0,0,0,.24)"
      zIndex="999"
      transition="all 0.3s ease-in-out"
    >
      <SubMenuContainerInner />

      {/* <Box //megaMenu__group--inner 1
        position="absolute"
        opacity={value === "1" ? "1" : "0"}
        transition="opacity 0.6s ease"
        transitionDelay={"0.3s"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Link href="https://smarthr.jp/smarthr/">SmartHRの特徴</Link>
        </Box>
        <List>
          {siteConfig.mainNav[0].items![0].items!.map((item, index) => {
            return (
              <ListItem key={index + item.title}>
                <Text>
                  {item.title.split(/(\n)/).map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        {item.match(/\n/) ? <br /> : item}
                      </React.Fragment>
                    );
                  })}
                </Text>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box //megaMenu__group--inner 2
        position="absolute"
        opacity={value === "2" ? "1" : "0"}
        transition="opacity 0.6s ease"
        transitionDelay={"0.3s"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        サービス
      </Box>*/}
    </Box>

    // <Box //.header div
    //   boxSizing="border-box"
    // >
    //   <Box //.header .megaMenu
    //     position="relative"
    //     height="0"
    //     backgroundColor="#fff"
    //     transition="height .3s ease"
    //     pointerEvents="none"
    //     overflow="hidden"
    //     //
    //   >
    //     <Box //.header .megaMenu is-open
    //       borderTop="2px solid #f4f8f9"
    //     >
    //       <Box //header .megaMenu.is-open[data-target="1"]
    //         height="268px"
    //         // height="102px"
    //       >
    //         {/* megaMenu__inner Start */}
    //         <Box
    //           position="relative"
    //           height="100%"
    //           max-width="1366px"
    //           margin="auto"
    //         >
    //           <Box
    //           ></Box>
    //         </Box>
    //         {/* megaMenu__inner End */}
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
  );
}
