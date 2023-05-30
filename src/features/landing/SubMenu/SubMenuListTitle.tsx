import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import type { IMenuItem } from "@/features/configs/site";

type Props = {
  item?: IMenuItem;
  index: number;
  hoveredNo: number;
  setHoveredNo: React.Dispatch<React.SetStateAction<number>>;
};

function SubMenuListTitle({ item, index, hoveredNo, setHoveredNo }: Props) {
  return (
    <>
      <Flex // List Title
        margin={item ? "0 0 20px" : "0px"}
        fontSize={item ? "14px" : "20px"}
        lineHeight="1"
        marginTop={index !== 0 ? "40px" : "0"}
        flexShrink="0"
        display="flex"
        flexDirection={item ? "row" : "column"}
        marginRight={item ? "0px" : "72px"}
      >
        <NextLink href={item ? item.href : "https://smarthr.jp/function/"} target="_blank">
          <Text
            as="a"
            position="relative"
            fontWeight="700"
            lineHeight="1"
            paddingRight="28px"
            textDecoration="none"
            color={hoveredNo === index ? "#00c4cc" : "#4c4c4c"}
            transition="color .2s"
            onMouseEnter={() => setHoveredNo(index)}
            onMouseLeave={() => setHoveredNo(-1)}
            _before={{
              content: "''",
              position: "absolute",
              width: "20px",
              height: "20px",
              top: "45%",
              right: hoveredNo === index ? "-12px" : "0px",
              transform: "translateY(-50%)",
              margin: "1px 0 0",
              backgroundImage: "url(/image/icon/icon_arrowRight_blue.svg)",
              backgroundPosition: "50%",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              transition: "right .2s",
            }}
          >
            {item ? item.title : "機能一覧"}
          </Text>
        </NextLink>
      </Flex>
    </>
  );
}

export { SubMenuListTitle };
